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

export {Table};

