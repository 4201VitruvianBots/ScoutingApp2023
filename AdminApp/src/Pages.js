import './App.css';
import { Table } from './Form';
import { selectedPage } from './App.js';

function MainPage(props) {
    const handleMatchClick = (id) =>{
        props.setSelected('MatchData');
        props.setSelectedMatch(id);
        console.log(id);
    }
    return (
        <>
            <Table data={[
                ['Scout', 'Robot', 'Team', 'Match', 'Status', 'Tablet Battery'],
                ['Josiah', 'Blue 1', '4414', '22', 'Auto', '61'],
                ['Haley', 'Blue 2', '4201', '22', 'Auto', '66'],
                ['Natalie', 'Blue 3', '1678', '22', 'Auto', '72'],
                ['Gaby', 'Red 1', '1323', '22', 'Auto', '68'],
                ['Devin', 'Red 2', '254', '22', 'Auto', '67'],
                ['Cassie', 'Red 3', '7157', '22', 'Auto', '70']
            ]} />
            <Table data={[
                ['Super Scout', 'Alliance', 'Match', 'Status', 'Tablet Battery'],
                ['Robyn', 'Blue', '22', 'Sign-In', '26'],
                ['Naomi', 'Red', '22', 'Sign-In', '31']
            ]} />
            <Table data={[
                ['Match', 'B1', 'B2', 'B3', 'R1', 'R2', 'R3', 'Match', 'B1', 'B2', 'B3', 'R1', 'R2', 'R3'],
                [<input type='button' onClick={()=>handleMatchClick(1)} value='1'/> , '599' , '4276' , '3476' , '5124' , '4999' , '5857' , <input type='button' onClick={()=>handleMatchClick(24)} value='24'/> ,  '' , '' , '' , '' , '' , '' ], 
                [<input type='button' onClick={()=>handleMatchClick(2)} value='2'/> , '1515' , '294' , '3408' , '5802' , '980' , '5669' , <input type='button' onClick={()=>handleMatchClick(25)} value='25'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(3)} value='3'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(26)} value='26'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(4)} value='4'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(27)} value='27'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(5)} value='5'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(28)} value='28'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(6)} value='6'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(29)} value='29'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(7)} value='7'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(30)} value='30'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(8)} value='8'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(31)} value='31'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(9)} value='9'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(32)} value='32'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(10)} value='10'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(33)} value='33'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(11)} value='11'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(34)} value='34'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(12)} value='12'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(35)} value='35'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(13)} value='13'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(36)} value='36'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(14)} value='14'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(37)} value='37'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(15)} value='15'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(38)} value='38'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(16)} value='16'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(39)} value='39'/> ,  '' , '' , '' , '' , '' , '' ], 
                [<input type='button' onClick={()=>handleMatchClick(17)} value='17'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(40)} value='40'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(18)} value='18'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(41)} value='41'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(19)} value='19'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(42)} value='42'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(20)} value='20'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(43)} value='43'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(21)} value='21'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(44)} value='44'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(22)} value='22'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(45)} value='45'/> ,  '' , '' , '' , '' , '' , '' ],
                [<input type='button' onClick={()=>handleMatchClick(23)} value='23'/> , '' , '' , '' , '' , '' , '' , <input type='button' onClick={()=>handleMatchClick(46)} value='46'/> ,  '' , '' , '' , '' , '' , '' ],
            ]} />
        </>
    );
}

function MatchArchive(props) {
    return (
        <Table data={[
            ['Match Number' , 'Review Match Data' , 'Remove From Archive' , 'Delete'],
            ['Match Number' , 'Review Match Data' , 'Remove From Archive' , 'Delete'],
            ['Match Number' , 'Review Match Data' , 'Remove From Archive' , 'Delete'],
            ['Match Number' , 'Review Match Data' , 'Remove From Archive' , 'Delete'],
            ['Match Number' , 'Review Match Data' , 'Remove From Archive' , 'Delete'],
            ['Match Number' , 'Review Match Data' , 'Remove From Archive' , 'Delete'],
            ['Match Number' , 'Review Match Data' , 'Remove From Archive' , 'Delete'],
            ['Match Number' , 'Review Match Data' , 'Remove From Archive' , 'Delete'],
            ['Match Number' , 'Review Match Data' , 'Remove From Archive' , 'Delete'],
            ['Match Number' , 'Review Match Data' , 'Remove From Archive' , 'Delete'],
        ]} />
    );
}

function AllMatches(props) {
    return (
        <Table data={[
            ['Match', 'B1', 'B2', 'B3', 'R1', 'R2', 'R3', 'Match', 'B1', 'B2', 'B3', 'R1', 'R2', 'R3', 'Match', 'B1', 'B2', 'B3', 'R1', 'R2', 'R3', 'Match', 'B1', 'B2', 'B3', 'R1', 'R2', 'R3'],
            ['1' , '' , '' , '' , '' , '' , '' , '24' ,  '' , '' , '' , '' , '' , '', '47' , '' , '' , '' , '' , '' , '' , '70' ,  '' , '' , '' , '' , '' , '' ], 
            ['2' , '' , '' , '' , '' , '' , '' , '25' ,  '' , '' , '' , '' , '' , '', '48' , '' , '' , '' , '' , '' , '' , '71' ,  '' , '' , '' , '' , '' , '' ],
            ['3' , '' , '' , '' , '' , '' , '' , '26' ,  '' , '' , '' , '' , '' , '', '49' , '' , '' , '' , '' , '' , '' , '72' ,  '' , '' , '' , '' , '' , '' ],
            ['4' , '' , '' , '' , '' , '' , '' , '27' ,  '' , '' , '' , '' , '' , '', '50' , '' , '' , '' , '' , '' , '' , '73' ,  '' , '' , '' , '' , '' , '' ],
            ['5' , '' , '' , '' , '' , '' , '' , '28' ,  '' , '' , '' , '' , '' , '', '51' , '' , '' , '' , '' , '' , '' , '74' ,  '' , '' , '' , '' , '' , '' ],
            ['6' , '' , '' , '' , '' , '' , '' , '29' ,  '' , '' , '' , '' , '' , '', '52' , '' , '' , '' , '' , '' , '' , '75' ,  '' , '' , '' , '' , '' , '' ],
            ['7' , '' , '' , '' , '' , '' , '' , '30' ,  '' , '' , '' , '' , '' , '', '53' , '' , '' , '' , '' , '' , '' , '76' ,  '' , '' , '' , '' , '' , '' ],
            ['8' , '' , '' , '' , '' , '' , '' , '31' ,  '' , '' , '' , '' , '' , '', '54' , '' , '' , '' , '' , '' , '' , '77' ,  '' , '' , '' , '' , '' , '' ],
            ['9' , '' , '' , '' , '' , '' , '' , '32' ,  '' , '' , '' , '' , '' , '', '55' , '' , '' , '' , '' , '' , '' , '78' ,  '' , '' , '' , '' , '' , '' ],
            ['10' , '' , '' , '' , '' , '' , '' , '33' ,  '' , '' , '' , '' , '' , '', '56' , '' , '' , '' , '' , '' , '' , '79' ,  '' , '' , '' , '' , '' , '' ],
            ['11' , '' , '' , '' , '' , '' , '' , '34' ,  '' , '' , '' , '' , '' , '', '57' , '' , '' , '' , '' , '' , '' , '80' ,  '' , '' , '' , '' , '' , '' ],
            ['12' , '' , '' , '' , '' , '' , '' , '35' ,  '' , '' , '' , '' , '' , '', '58' , '' , '' , '' , '' , '' , '' , '81' ,  '' , '' , '' , '' , '' , '' ],
            ['13' , '' , '' , '' , '' , '' , '' , '36' ,  '' , '' , '' , '' , '' , '', '59' , '' , '' , '' , '' , '' , '' , '82' ,  '' , '' , '' , '' , '' , '' ],
            ['14' , '' , '' , '' , '' , '' , '' , '37' ,  '' , '' , '' , '' , '' , '', '60' , '' , '' , '' , '' , '' , '' , '83' ,  '' , '' , '' , '' , '' , '' ],
            ['15' , '' , '' , '' , '' , '' , '' , '38' ,  '' , '' , '' , '' , '' , '', '61' , '' , '' , '' , '' , '' , '' , '84' ,  '' , '' , '' , '' , '' , '' ],
            ['16' , '' , '' , '' , '' , '' , '' , '39' ,  '' , '' , '' , '' , '' , '', '62' , '' , '' , '' , '' , '' , '' , '85' ,  '' , '' , '' , '' , '' , '' ], 
            ['17' , '' , '' , '' , '' , '' , '' , '40' ,  '' , '' , '' , '' , '' , '', '63' , '' , '' , '' , '' , '' , '' , '86' ,  '' , '' , '' , '' , '' , '' ],
            ['18' , '' , '' , '' , '' , '' , '' , '41' ,  '' , '' , '' , '' , '' , '', '64' , '' , '' , '' , '' , '' , '' , '87' ,  '' , '' , '' , '' , '' , '' ],
            ['19' , '' , '' , '' , '' , '' , '' , '42' ,  '' , '' , '' , '' , '' , '', '65' , '' , '' , '' , '' , '' , '' , '88' ,  '' , '' , '' , '' , '' , '' ],
            ['20' , '' , '' , '' , '' , '' , '' , '43' ,  '' , '' , '' , '' , '' , '', '66' , '' , '' , '' , '' , '' , '' , '89' ,  '' , '' , '' , '' , '' , '' ],
            ['21' , '' , '' , '' , '' , '' , '' , '44' ,  '' , '' , '' , '' , '' , '', '67' , '' , '' , '' , '' , '' , '' , '90' ,  '' , '' , '' , '' , '' , '' ],
            ['22' , '' , '' , '' , '' , '' , '' , '45' ,  '' , '' , '' , '' , '' , '', '68' , '' , '' , '' , '' , '' , '' , '91' ,  '' , '' , '' , '' , '' , '' ],
            ['23' , '' , '' , '' , '' , '' , '' , '46' ,  '' , '' , '' , '' , '' , '', '69' , '' , '' , '' , '' , '' , '' , '92' ,  '' , '' , '' , '' , '' , '' ],
        ]} />
    )
}
function MatchData(props) {
    return (
        <div>{props.selectedMatch}</div>
    )
}
export {MainPage, MatchArchive, AllMatches, MatchData};
