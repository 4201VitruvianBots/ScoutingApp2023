import Table from 'react-bootstrap/Table';

function SimpleTable() {

    return (
        <table> 
            <thead>
                <tr>
                    <th colSpan={2}>Average Auto Grid</th>
                </tr>
            </thead> 
            <tbody>
                <tr>
                    <td>4201</td>
                    <td>3.8</td>
                </tr>
                <tr> 
                    <td>3476</td>
                    <td>6.2</td>
                </tr>
            </tbody>
        </table>

    )

}

function WeightedTable() {

}

function BlankTable() {

}


function FinalTable() {

}
export { SimpleTable, WeightedTable, BlankTable, FinalTable };

