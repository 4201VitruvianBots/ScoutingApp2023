import React from "react";
import './App.css';

function Table(props) {
    return (<table><tbody>
        {props.data.map(row => <tr>
            {row.map(cell => (
                <td>{cell}</td>
            ))}
        </tr>)}
        </tbody></table>
    );
}

class ShiftScouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: props.data, id: props.id, label: props.label, value: 0, selected: 0 };
        this.scout = this.scout.bind(this);
        
    }
}

export {Table};

