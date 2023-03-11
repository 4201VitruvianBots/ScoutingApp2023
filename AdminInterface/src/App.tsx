import React, { useEffect, useState } from 'react';
import './App.css';

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

    const StatusCard = (
        { status }: { status?: TabletStatus }
    ) => {
        const { Scouter_Name = '', Team_Number = '', Battery_Level = 0, Online = false } = status ?? {};

        return (<div className="status-card">
            <div className="status-line team-number">{Team_Number}</div>
            <div className="status-line scouter-name">{Scouter_Name}</div>
            {Online
                ? <div className="status-line battery">{Math.round(Battery_Level * 100)}%</div>
                : <div className="status-line battery noconnect">Not Connected</div>
            }
        </div>);
    }

    return (
        <main>
            <div className="status">
                <div className="status-red">
                    <StatusCard status={tabletStatus?.[0]} />
                    <StatusCard status={tabletStatus?.[1]} />
                    <StatusCard status={tabletStatus?.[2]} />
                    <StatusCard status={tabletStatus?.[6]} />
                </div>
                <div className="status-blue">
                    <StatusCard status={tabletStatus?.[3]} />
                    <StatusCard status={tabletStatus?.[4]} />
                    <StatusCard status={tabletStatus?.[5]} />
                    <StatusCard status={tabletStatus?.[7]} />
                </div>
            </div>
        </main>
    );
}

export default App;
