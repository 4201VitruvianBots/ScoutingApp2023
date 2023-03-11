import React, { useEffect, useState } from 'react';
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

function App() {
    const [tabletStatus, setTabletStatus] = useState<AllTabletStatus>();

    useEffect(() => {
        const updateData = async () => {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/status`, { method: 'GET' });
            setTabletStatus(await response.json() as AllTabletStatus);
        }

        setInterval(updateData, 50000);
        updateData();
    }, [])

    return (<main>
        <TabletStatusDisplay allTabletStatus={tabletStatus} />
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
                    <span className="material-symbols-outlined"> signal_disconnected</span>
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

// function MatchDisplay({ allMatches }: {allMatches?: })

export default App;
