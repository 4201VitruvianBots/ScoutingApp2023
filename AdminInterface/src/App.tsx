import React, { useContext, useEffect, useMemo, useState } from 'react';
import './App.css';
import 'material-symbols/outlined.css'

const selfTeamNumber = '4201';

interface TabletStatus {
    Scouter_Name: string,
    Team_Number: string,
    Match_Number: number,
    Battery_Level: number | null,
    Online: boolean
}

type AllTabletStatus = {
    registered: {
        0: TabletStatus,
        1: TabletStatus,
        2: TabletStatus,
        3: TabletStatus,
        4: TabletStatus,
        5: TabletStatus,
        6: TabletStatus,
        7: TabletStatus
    },
    unregistered: number
}

interface MatchStatus {
    submitted: number,
    teamNumber?: string
}

type Match = [MatchStatus, MatchStatus, MatchStatus, MatchStatus, MatchStatus, MatchStatus, MatchStatus, MatchStatus];
type AllMatches = Record<string, Match>;

function classList(...classes: (string | [className: string, condition: boolean])[]): string {
    return classes
        .map(e => typeof e === 'string' ? e : e[1] ? e[0] : null)
        .filter(e => e !== null)
        .join(' ');
}

function App() {
    const [tabletStatus, setTabletStatus] = useState<AllTabletStatus>();
    const [matches, setMatches] = useState<AllMatches>();

    useEffect(() => {
        const updateData = async () => {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/status`, { method: 'GET' });
            const status = await response.json() as { tablets: AllTabletStatus, matches: AllMatches };
            setTabletStatus(status.tablets);
            setMatches(status.matches);
        }

        setInterval(updateData, 5000);
        updateData();
    }, [])

    return (<main>
        <TabletStatusDisplay allTabletStatus={tabletStatus} />
        <MatchesDisplay allMatches={matches} />
    </main>)
}

function TabletStatusDisplay({ allTabletStatus }: { allTabletStatus?: AllTabletStatus }) {
    const StatusCard = (
        { status }: { status?: TabletStatus }
    ) => {
        const { Scouter_Name = '', /*Team_Number = '',*/ Match_Number = '', Battery_Level = 0, Online = false } = status ?? {};

        const battery = Math.round((Battery_Level ?? 0) * 7);

        return (<div className="status-card">
            <div className="status-line match-number">{Match_Number}</div>
            {/* <div className="status-line team-number">{Team_Number}</div> */}
            <div className="status-line scouter-name">{Scouter_Name}</div>
            {Online
                ? Battery_Level === null
                    ? <div className="status-line battery">
                        <span className="material-symbols-outlined">battery_unknown</span>
                        Unknown
                    </div>
                    : <div className={classList('status-line', 'battery', ['low', Battery_Level < 0.5], ['alert', Battery_Level <= 0.2])}>
                        <span className="material-symbols-outlined">battery_{Battery_Level <= 0.2 ? 'alert' : battery === 7 ? 'full' : battery + '_bar'}</span>
                        {Math.round(Battery_Level * 100)}%
                    </div>
                : <div className="status-line battery noconnect">
                    <span className="material-symbols-outlined">wifi_off</span>
                    Not Connected
                </div>
            }
        </div>);
    }

    return (
        <div className="tablet-status">
            <div className="status-red">
                <StatusCard status={allTabletStatus?.registered[0]} />
                <StatusCard status={allTabletStatus?.registered[1]} />
                <StatusCard status={allTabletStatus?.registered[2]} />
                <StatusCard status={allTabletStatus?.registered[6]} />
            </div>
            <div className="status-blue">
                <StatusCard status={allTabletStatus?.registered[3]} />
                <StatusCard status={allTabletStatus?.registered[4]} />
                <StatusCard status={allTabletStatus?.registered[5]} />
                <StatusCard status={allTabletStatus?.registered[7]} />
            </div>
            <div className="unregistered-status"><span className="unregistered-number">{allTabletStatus?.unregistered}</span> unregistered tablets</div>
        </div>
    );
}

const SelectedTeamsContext = React.createContext<(string | null)[] | null>(null);

function MatchesDisplay({ allMatches = {} }: { allMatches?: AllMatches }) {
    const [selectedmatch, setSelectedMatch] = useState<string>();
    const [notifAllowed, setNotifAllowed] = useState(Notification.permission)

    const MatchStatus = ({ match: { submitted, teamNumber = '' }, colorClass, selected }: { match: MatchStatus, colorClass: string, selected: boolean }) => {
        return (
            <td className={classList(
                'match-status',
                colorClass,
                ['submitted', submitted > 0],
                ['required', (useContext(SelectedTeamsContext) ?? []).includes(teamNumber)],
                ['selected', selected],
                ['self', teamNumber === selfTeamNumber]
                // ['conflict', submitted > 1]
            )}>
                {submitted > 1 && <span className="material-symbols-outlined warning" title="Multiple submissions for this robot">warning</span>}
                {teamNumber || (submitted > 0 ? <span className="material-symbols-outlined">done</span> : '')}
            </td>
        );
    };

    const requestNotifs = () => {
        Notification.requestPermission().then(e => setNotifAllowed(e));
    }

    const selectedTeams = selectedmatch === undefined ? null : allMatches[selectedmatch].map(e => e.teamNumber ?? null);

    const ready = useMemo(() => (
        selectedmatch === undefined ? false :
            Object.entries(allMatches!)
                .filter(([match_number, match]) => parseInt(match_number) < parseInt(selectedmatch))
                .map(([match_number, match]) => match)
                .flat(1)
                .every(matchStatus => (
                    matchStatus.teamNumber === undefined ||
                    !(selectedTeams!.includes(matchStatus.teamNumber)) ||
                    matchStatus.submitted
                ))
    ), [allMatches, selectedmatch]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (ready)
            new Notification('Admin Interface', { body: `Data for match ${selectedmatch} is ready` });
    }, [ready]); // eslint-disable-line react-hooks/exhaustive-deps

    return (<SelectedTeamsContext.Provider value={selectedTeams}>
        <div className="match-status-container">
            <div className="table-container">
                <table className="match-status">
                    <thead><tr>
                        <th>Match</th>
                        <th className="status-red">Red 1</th>
                        <th className="status-red">Red 2</th>
                        <th className="status-red">Red 3</th>
                        <th className="status-red">Red SS</th>
                        <th className="status-blue">Blue 1</th>
                        <th className="status-blue">Blue 2</th>
                        <th className="status-blue">Blue 3</th>
                        <th className="status-blue">Blue SS</th>
                    </tr></thead>
                    <tbody>
                        {Object.entries(allMatches).map(([matchNumber, status], i) => {
                            const selected = matchNumber === selectedmatch;
                            return (<tr onClick={() => setSelectedMatch(matchNumber)} key={i} >
                                <td className={selected ? 'selected' : ''}>{matchNumber}</td>
                                <MatchStatus match={status[1]} colorClass="status-red" selected={selected} />
                                <MatchStatus match={status[0]} colorClass="status-red" selected={selected} />
                                <MatchStatus match={status[2]} colorClass="status-red" selected={selected} />
                                <MatchStatus match={status[6]} colorClass="status-red" selected={selected} />
                                <MatchStatus match={status[3]} colorClass="status-blue" selected={selected} />
                                <MatchStatus match={status[4]} colorClass="status-blue" selected={selected} />
                                <MatchStatus match={status[5]} colorClass="status-blue" selected={selected} />
                                <MatchStatus match={status[7]} colorClass="status-blue" selected={selected} />
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
            <div className="notif-message">
                {notifAllowed === 'default' && <button className="notif-button" onClick={requestNotifs}>Enable Notifications</button>}
                {notifAllowed === 'denied' && 'You must give permissions to enable notifications.'}
            </div>
        </div>
    </SelectedTeamsContext.Provider>);
}

export default App;
