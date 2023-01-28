import { NumberInput, ButtonInput } from "./Form";
import './App.css';
import './App.js';

import Select from 'react-select';

function Page(props) {
    return (
        <div className={props.selected ? 'page selected' : 'page'} id={props.id}>
            {props.children}
        </div>
    );
}

function RobotData(props) {
    return (
        <div className={props.selected ? "RobotData selected" : "RobotData"}>
            {/* <Fouls selected={this.state.selected === 'Fouls'} /> */}
            {/* <SavePage selected={this.state.selected === 'save-page'} /> */}

        </div>
    )
}
function SignIn(props) {
    return (
        <Page selected={props.selected} className="page" id="sign-in">
            <div>
                <div class="tab">
                    <button class="tablinks" onclick="openCity(event, 'Sign-in')">Sign-in</button>
                    <button class="tablinks" onclick="openCity(event, 'Fouls')">          Fouls        </button>
                    <button class="tablinks" onclick="openCity(event, 'Submit')">        Sumbit        </button>
                    <br></br>
                </div>
                <br></br>
                <div class="tab">
                    <button class="tablinks" onclick="openCity(event, 'Red 1')">Red 1</button>
                    <button class="tablinks" onclick="openCity(event, 'Red 2')">Red 2</button>
                    <button class="tablinks" onclick="openCity(event, 'Red 3')">Red 3</button>
                    <br></br>
                </div>
                <p className="section-label">Energized</p>
                <div className="textArea">
                    <input type="text" id="Sname" name="Sname" placeholder="Scouter Name" className="text-input" />
                    <br />
                    <input type="text" id="Sname" name="Sname" placeholder="Event Name" className="text-input" />
                    <br></br>
                    <input type="text" id="Sname" name="Sname" placeholder="Match Number" className="text-input" />
                    <br></br>
                    <input type="text" id="Sname" name="Sname" placeholder="Robot Number" className="text-input" />
                    {/* <div class="btn-group">
                        <ButtonInput on_label='You are scouting for Red Allaince' off_label='Red ' />
                        <ButtonInput on_label='You are scouting for Blue Allaince' off_label='Blue ' /> */}

                        {/* <ButtonInput on_label='You are scouting for Red 2' off_label='Red 2 ' />
                        <ButtonInput on_label='You are scouting for Red 3' off_label='Red 3' /> */}
                        {/* <ButtonInput on_label='You are scouting for Blue 1' off_label='Blue 1' />
                        <ButtonInput on_label='You are scouting for Blue 2' off_label='Blue 2 ' />
                        <ButtonInput on_label='You are scouting for Blue 3' off_label='Blue 3' /> */}
                        {/* <ButtonInput on_label='Data recieved' off_label='Robot(s) not at the match' /> */}
                        {/* <button type="button">Submit</button> */}
                    {/* </div> */}
                    <br />
                    {/* <br />
                </select> */}
                </div>
            </div>
        </Page>
    );
}
const FoulsDrop = [
    { label: 'Foul (Bumpers)', value: 'Foul0' },
    { label: 'RED CARD Keep it together', value: 'Foul1' },
    { label: 'FOUL (Tall ROBOTS not allowed.)', value: 'Foul2' },
    { label: 'FOUL ( Don\’t overextend yourself )', value: 'Foul3' },
    { label: 'TECH FOUL if the over-extension scores a GAME PIECE ( Don’t overextend yourself )', value: 'Foul4' },
    { label: 'FOUL (Opponent\’s zone, no extension.)', value: 'Foul5' },
    { label: 'TECH FOUL (Opponent\’s zone, no extension.)', value: 'Foul6' },
    { label: 'TECH FOUL (Opponent\’s zone, no extension.)', value: 'Foul6' },
    { label: 'FOUL (Don\’t extend in multiple directions.)', value: 'Foul7' },
    { label: 'TECH FOUL (if extending in multiple directions scores a GAME PIECE.)', value: 'Foul8' },
    { label: 'RED CARD(If extendingin multiple directions results in the ROBOT blocking all access to a FIELD ELEMENT) .', value: 'Foul9' },
    { label: 'RED CARD(If extendingin multiple directions results in the ROBOT blocking all access to a FIELD ELEMENT) .', value: 'Foul10' },
    { label: 'FOUL (*Don\’t expect to gain by doing others harm).', value: 'Foul11' },
    { label: 'TECH FOUL ( Don\’t expect to gain by doing others harm)', value: 'Foul12' },
    { label: ' FOUL(*There\’s a 5-count on PINS.)', value: 'Foul13' },
    { label: 'TECH FOUL for every 5 seconds in which the situation is not corrected (There’s a 5-count on PINS) ', value: 'Foul14' },
    { label: 'TECH FOUL (*Don\’t collude with your partners to shut down major parts of game play), plus an additional TECH FOUL for every 5 seconds in which the situation is not corrected ', value: 'Foul15' },
    { label: 'FOUL (*Stay out of other ROBOTS) ', value: 'Foul16' },
    { label: 'TECH FOUL (*This isn\’t combat robotics) ', value: 'Foul17' },
    { label: ' YELLOW CARD (This isn\’t combat robotics) ', value: 'Foul18' },
    { label: ' TECH FOUL  and RED CARD (If opponent ROBOT is unable to drives) ', value: 'Foul19' },
    { label: ' TECH FOUL and YELLOW CARD (Don\’t tip or entangle) ', value: 'Foul20' },
    { label: '  If CONTINUOUS or opponent ROBOT is unable to drive,TECH FOUL and RED CARD (Don’t tip or entangle) ', value: 'Foul21' },
    { label: 'FOUL per instance. ( Right of way) ', value: 'Foul22' },
    { label: 'TECH FOUL per instance.(Don\’t climb on each other unless in the COMMUNITY) ', value: 'Foul23' },
    { label: ' If during a MATCH, TECH FOUL (Be careful what you interact with.) ', value: 'Foul24' },
    { label: 'FOUL (Stay on your side in AUTO)  ', value: 'Foul25' },
    { label: 'If contact with an opponent ROBOT, TECH FOUL (Stay on your side in AUTO)  ', value: 'Foul26' },
    { label: 'TECH FOUL per moved GAME PIECE (Do not interfere with opponent GAME PIECES in AUTO) ', value: 'Foul27' },
    { label: ' FOUL per instance ( Don\’t mess with the opponent’s CHARGE STATION.) ', value: 'Foul28' },
    { label: ' RED CARD for the ALLIANCE (Don\’t trick the sensors.) ', value: 'Foul29' },
    { label: ' RED CARD (Don’t jam the CHARGE STATION) ', value: 'Foul30' },
    { label: ' FOUL per GAME PIECE (*Keep GAME PIECES in bounds) ', value: 'Foul31' },
    { label: 'TECH FOUL per GAME PIECE (GAME PIECES: use as directed.) ', value: 'Foul32' },
    { label: 'FOUL per additional GAME PIECES (1 GAME PIECE at a time (except in LOADING ZONE and COMMUNITY) ', value: 'Foul33' },
    { label: 'If egregious, YELLOW CARD. (1 GAME PIECE at a time (except in LOADING ZONE and COMMUNITY) ', value: 'Foul34' },
    { label: 'TECH FOUL per GAME PIECE. (Launching GAME PIECES is only okay in the COMMUNITY) ', value: 'Foul35' },
    { label: 'REPEATED violations of this rule are likely to escalate rapidly to YELLOW or RED CARDS (Launching GAME PIECES is only okay in the COMMUNITY) ', value: 'Foul36' },
    { label: 'FOUL and opponents are awarded the SUSTAINABILITY BONUS Ranking Point.(Don’t mess with the opponents’ GRIDS) ', value: 'Foul37' },
    { label: '"Behavior will be discussed with team or individual. Violations of this rule are likely to escalate to YELLOW or RED CARDS rapidly (i.e. the threshold for egregious violations is relatively low.)(*Be a good person) ', value: 'Foul38' },
    { label: ' Verbal warning. If subsequent violations at any point during the event, YELLOW CARD. (*Humans, stay off the FIELD until green.)', value: 'Foul39' },
    { label: 'Verbal warning. If subsequent violations at any point during the event, YELLOW CARD (Never step over the guardrail.)', value: 'Foul40' },
    { label: 'Behavior will be discussed with team or individual. Violations of this rule are likely to escalate rapidly to YELLOW or RED CARDS and may lead to dismissal from the event (i.e. thethreshold for egregious violations is relatively low.) (Asking other teams to throw a MATCH – not cool)', value: 'Foul41' },
    { label: 'Behavior will be discussed with team or individual. Violations of this rule are likely to escalate rapidly to YELLOW or RED CARDS and may lead to dismissal from the event (i.e. thethreshold for egregious violations is relatively low.) (Asking other teams to throw a MATCH – not cool)(*Letting someone coerce you in to throwing a MATCH – also not cool.)"', value: 'Foul42' },
    { label: 'Behavior will be discussed with team or individual. Violations of this rule are likely to escalate rapidly to YELLOW or RED CARDS and may lead to dismissal from the event (i.e. thethreshold for egregious violations is relatively low.) (Asking other teams to throw a MATCH – not cool)(*Letting someone coerce you in to throwing a MATCH – also not cool.)"', value: 'Foul43' },
    { label: '"Behavior will be discussed with team or individual. Violations of this rule are likely to escalate rapidly to YELLOW or RED CARDS and may lead to dismissal from the event (i.e. the threshold for egregious violations is relatively low.(Throwing your own MATCH is bad.)"', value: 'Foul44' },
    { label: 'YELLOW CARD(*Don’t abuse ARENA access)', value: 'Foul45' },
    { label: ' Verbal warning. If subsequent violations at any point during the event, YELLOW CARD(*Be careful what you interact with)', value: 'Foul46' },
    { label: 'Verbal warning. If subsequent violations at any point during the event, YELLOW CARD (Don\'t mess with GAME PIECES) ', value: 'Foul47' },
    { label: 'YELLOW CARD, and ALLIANCES are ineligible for SUSTAINAIBLITY and ACTIVATION BONUSES. (Don\'t violate rules for Ranking Points.)', value: 'Foul48' },
    { label: 'Verbal warning, or if a subsequent violation within the tournament phase (i.e.Qualifications or Playoffs), TECH FOUL applied to their upcoming MATCH. If the DRIVE TEAM is not MATCH ready within 2 minutes of the verbal warning/TECH FOUL and the Head REFEREE perceives no good faith effort by the DRIVE TEAM to quickly become MATCH ready, DISABLED (*Be prompt)', value: 'Foul49' },
    { label: ': YELLOW CARD (*Teams may not enable their ROBOTS on the FIELD)', value: 'Foul50' },
    { label: 'MATCH will not start until situation remedied. If discovered or used inappropriately during a MATCH, YELLOW CARD. (*You can’t bring/use anything you want)"', value: 'Foul51' },
    { label: 'RED CARD (*Show up to your MATCHES) ', value: 'Foul52' },
    { label: ' Verbal warning. If subsequent violations in more than 1 MATCH, YELLOW CARD (Don’t bang on the glass)', value: 'Foul53' },
    { label: 'FOUL per item contacted. (Behind the lines)', value: 'Foul54' },
    { label: ' FOUL (No wandering)', value: 'Foul55' },
    { label: '  FOUL per GAME PIECE (COACHES, GAME PIECES are off limits)', value: 'Foul56' },
    { label: ' FOUL per GAME PIECES. (GAME PIECES through PORTALS only)', value: 'Foul57' },
    { label: '  FOUL (DRIVE TEAMS, watch your reach)', value: 'Foul58' },
    { label: '  NO FOULS', value: 'Foul59' },
    // : FOUL (DRIVE TEAMS, watch your reach)
];
function Fouls(props) {
    return (
        <Page selected={props.selected} className="page" id="Fouls">
            <p className="section-label">Fouls</p>

            <div className="textArea">
                <ButtonInput on_label='Your robot got Foul (Bumpers)' off_label='Foul (Bumpers) ' />
                <ButtonInput on_label='Your robot got DISABLED (ROBOTS, stay on the FIELD during the MATCH)' off_label='DISABLED (ROBOTS, stay on the FIELD during the MATCH) ' />
                <ButtonInput on_label='Your robot got DISABLED(Keep your BUMPERS together.)' off_label='DISABLED(Keep your BUMPERS together.) ' />
                <ButtonInput on_label='RED CARD (Keep it together)' off_label='RED CARD (Keep it together) ' />
                <ButtonInput on_label='Robot recieved a red card' off_label='Red Card ' />
                <ButtonInput on_label='Robot recieved a yellow card' off_label='Yellow Card ' />
                <div className="textArea">
                    <h1>Fouls</h1>
                    <NumberInput items={['1']} id="autoconehigh" />
                    <br></br>
                    <h1>Tech Fouls</h1>
                    <NumberInput items={['1']} id="autoconemid" />
                    <br></br>
                    <h1>Disable</h1>
                    <NumberInput items={['1']} id="autoconelow" />
                    <br></br>
                    {/* //ButtonInput for red and yellow card */}
                </div>
            </div>
            <Select
                isMulti
                options={FoulsDrop}
                onChange={opt => console.log(opt)}
            />
        </Page>

    );
}

function Red1(props) {
    return (
        <Page selected={props.selected} className="page" id="Red 2">
            <p className="section-label">Red 1</p>

            <div className="textArea">
                <ButtonInput on_label='Your robot got Foul (Bumpers)' off_label='Foul (Bumpers) ' />
                <ButtonInput on_label='Your robot got DISABLED (ROBOTS, stay on the FIELD during the MATCH)' off_label='DISABLED (ROBOTS, stay on the FIELD during the MATCH) ' />
                <ButtonInput on_label='Your robot got DISABLED(Keep your BUMPERS together.)' off_label='DISABLED(Keep your BUMPERS together.) ' />
                <ButtonInput on_label='RED CARD (Keep it together)' off_label='RED CARD (Keep it together) ' />
                <ButtonInput on_label='Robot recieved a red card' off_label='Red Card ' />
                <ButtonInput on_label='Robot recieved a yellow card' off_label='Yellow Card ' />


                <div className="textArea">
                    <h1>Fouls</h1>
                    <NumberInput items={['1']} id="autoconehigh" />
                    <br></br>
                    <h1>Tech Fouls</h1>
                    <NumberInput items={['1']} id="autoconemid" />
                    <br></br>
                    <h1>Disable</h1>
                    <NumberInput items={['1']} id="autoconelow" />
                    <br></br>
                    {/* //ButtonInput for red and yellow card */}
                </div>
            </div>
        </Page>
    );
}
function Red2(props) {
    return (
        <Page selected={props.selected} className="page" id="Red 2">
            <p className="section-label">Red 2</p>

            <div className="textArea">
                <ButtonInput on_label='Your robot got Foul (Bumpers)' off_label='Foul (Bumpers) ' />
                <ButtonInput on_label='Your robot got DISABLED (ROBOTS, stay on the FIELD during the MATCH)' off_label='DISABLED (ROBOTS, stay on the FIELD during the MATCH) ' />
                <ButtonInput on_label='Your robot got DISABLED(Keep your BUMPERS together.)' off_label='DISABLED(Keep your BUMPERS together.) ' />
                <ButtonInput on_label='RED CARD (Keep it together)' off_label='RED CARD (Keep it together) ' />
                <ButtonInput on_label='Robot recieved a red card' off_label='Red Card ' />
                <ButtonInput on_label='Robot recieved a yellow card' off_label='Yellow Card ' />


                <div className="textArea">
                    <h1>Fouls</h1>
                    <NumberInput items={['1']} id="autoconehigh" />
                    <br></br>
                    <h1>Tech Fouls</h1>
                    <NumberInput items={['1']} id="autoconemid" />
                    <br></br>
                    <h1>Disable</h1>
                    <NumberInput items={['1']} id="autoconelow" />
                    <br></br>
                    {/* //ButtonInput for red and yellow card */}
                </div>
            </div>
        </Page>
    )
}

function Red3(props) {
    return (
        <Page selected={props.selected} className="page" id="Red 3">
            <p className="section-label">Red 3</p>

            <div className="textArea">
                <ButtonInput on_label='Your robot got Foul (Bumpers)' off_label='Foul (Bumpers) ' />
                <ButtonInput on_label='Your robot got DISABLED (ROBOTS, stay on the FIELD during the MATCH)' off_label='DISABLED (ROBOTS, stay on the FIELD during the MATCH) ' />
                <ButtonInput on_label='Your robot got DISABLED(Keep your BUMPERS together.)' off_label='DISABLED(Keep your BUMPERS together.) ' />
                <ButtonInput on_label='RED CARD (Keep it together)' off_label='RED CARD (Keep it together) ' />
                <ButtonInput on_label='Robot recieved a red card' off_label='Red Card ' />
                <ButtonInput on_label='Robot recieved a yellow card' off_label='Yellow Card ' />


                <div className="textArea">
                    <h1>Fouls</h1>
                    <NumberInput items={['1']} id="autoconehigh" />
                    <br></br>
                    <h1>Tech Fouls</h1>
                    <NumberInput items={['1']} id="autoconemid" />
                    <br></br>
                    <h1>Disable</h1>
                    <NumberInput items={['1']} id="autoconelow" />
                    <br></br>
                    {/* //ButtonInput for red and yellow card */}
                </div>
            </div>
        </Page>
    );
}
function SavePage(props) {
    return (
        <Page selected={props.selected} id="save-page">
            <p className="section-label">Submit</p>
            <div className="textArea">
                {/* <label htmlFor="notes" className="item-label">Notes</label> */}
                <h1>Some things you could comment are:</h1>
                <div className="bullet-points">
                    <li>defensive bot</li>
                    <li>do they play defense</li>
                    <li>do they play optimistical</li>
                    <li>thinking of other questions</li>
                    <li>Can the robot balance with other robots?</li>
                    <li>Does the robot securely/conesistently control game pieces?</li>
                </div>
                <br />
                <input type="text" id="notes" name="notes" placeholder="Comment here" className="text-input" />
                {/* <label className="item-label" htmlFor="clear">QR code and clear</label>
                <input type="submit" className="SAVE" value="Generate QR code"></input>
                <br />
                <label className="item-label" htmlFor="continue">Save and continue</label>
                <input type="reset" className="CLEAR" value="Clear Form" /> */}
                <input type="submit" className="submit-button"></input>
                {/* <div id="QRCode">{props.QRCode}</div> */}
            </div>
        </Page>
    );
}
export { SignIn, SavePage, Fouls, RobotData, Red1, Red2, Red3 };
