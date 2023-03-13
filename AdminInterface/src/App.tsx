import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import 'material-symbols/outlined.css'

interface TabletStatus {
    Scouter_Name: string,
    Team_Number: string,
    Battery_Level: number,
    Online: boolean
}

type AllTabletStatus = {
    0: TabletStatus,
    1: TabletStatus,
    2: TabletStatus,
    3: TabletStatus,
    4: TabletStatus,
    5: TabletStatus,
    6: TabletStatus,
    7: TabletStatus,
}

interface MatchStatus {
    submitted: boolean,
    scheduledTeamNumber?: string,
    submittedTeamNumber?: string
}

type Match = [MatchStatus, MatchStatus, MatchStatus, MatchStatus, MatchStatus, MatchStatus];
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
            const status = await response.json() as {tablets: AllTabletStatus, matches: AllMatches};
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
        const { Scouter_Name = '', Team_Number = '', Battery_Level = 0, Online = false } = status ?? {};

        const battery = Math.round(Battery_Level * 7);

        return (<div className="status-card">
            <div className="status-line team-number">{Team_Number}</div>
            <div className="status-line scouter-name">{Scouter_Name}</div>
            {Online
                ? <div className={'status-line battery' + (Battery_Level < 0.3 ? ' low' : Battery_Level < 0.1 ? 'alert' : ' verylow')}>
                    <span className="material-symbols-outlined">battery_{Battery_Level < 0.1 ? 'alert' : battery === 7 ? 'full' : battery + '_bar'}</span>
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
        <div className="status">
            <div className="status-red">
                <StatusCard status={allTabletStatus?.[0]} />
                <StatusCard status={allTabletStatus?.[1]} />
                <StatusCard status={allTabletStatus?.[2]} />
                <StatusCard status={allTabletStatus?.[6]} />
            </div>
            <div className="status-blue">
                <StatusCard status={allTabletStatus?.[3]} />
                <StatusCard status={allTabletStatus?.[4]} />
                <StatusCard status={allTabletStatus?.[5]} />
                <StatusCard status={allTabletStatus?.[7]} />
            </div>
        </div>
    );
}

const SelectedTeamsContext = React.createContext<string[] | null>(null);

function MatchesDisplay({ allMatches = {} }: {allMatches?: AllMatches}) {
    const [selectedmatch, setSelectedMatch] = useState<string>();

    const MatchStatus = ({match: {submitted, submittedTeamNumber, scheduledTeamNumber}}: {match: MatchStatus}) => {
        const displayNumber = scheduledTeamNumber || submittedTeamNumber || '';
        return (
            <td className={classList('match-status', ['submitted', submitted], ['required', (useContext(SelectedTeamsContext) ?? []).includes(displayNumber)])}>
                {displayNumber}
            </td>
        );
    };

    const selectedTeams = selectedmatch === undefined ? null : allMatches[selectedmatch].map(e => e.scheduledTeamNumber || e.submittedTeamNumber || '');

    return (<SelectedTeamsContext.Provider value={selectedTeams}>
        <table>
            <thead><tr>
                    <th></th>
                    <th>Match</th>
                    <th>Red 1</th>
                    <th>Red 2</th>
                    <th>Red 3</th>
                    <th>Blue 1</th>
                    <th>Blue 2</th>
                    <th>Blue 3</th>
            </tr></thead>
            <tbody>
                {Object.entries(allMatches).map(([matchNumber, status]) => <tr className={matchNumber === selectedmatch ? 'selected' : ''} >
                    <td><button onClick={() => setSelectedMatch(matchNumber)}>S</button></td>
                    <td>{matchNumber}</td>
                    <MatchStatus match={status[0]} />
                    <MatchStatus match={status[1]} />
                    <MatchStatus match={status[2]} />
                    <MatchStatus match={status[3]} />
                    <MatchStatus match={status[4]} />
                    <MatchStatus match={status[5]} />
                </tr>)}
            </tbody>
        </table>
    </SelectedTeamsContext.Provider>);
}

export default App;
