import './App.css';
import { SignIn, PreGame, Auto, TeleOp, SavePage, Navigation } from "./Pages";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signedIn: false, ScouterName: "", EventName: "" };
        this.setSelected = this.setSelected.bind(this);

    }


    setSelected(id) {
        this.setState({ selected: id });
    }
      
    render() {
        return (
            <main>
                <table>
                    <tbody>
                        <tr>
                            <td>Scout</td>
                            <td>Robot</td>
                            <td>Team</td>
                            <td>Match</td>
                            <td>Status</td>
                            <td>Tablet Battery</td>
                        </tr>
                        <tr>
                            <td>Josiah</td>
                            <td>Blue 1</td>
                            <td>4414</td>
                            <td>22</td>
                            <td>Auto</td>
                            <td>61</td>
                        </tr>
                        <tr>
                            <td>Haley</td>
                            <td>Blue 2</td>
                            <td>4201</td>
                            <td>22</td>
                            <td>Auto</td>
                            <td>66</td>
                        </tr>
                        <td>
                            <td>Natalie</td>
                            <td>Blue 3</td>
                            <td>1678</td>
                            <td>22</td>
                            <td>Auto</td>
                            <td>72</td>
                        </td>
                        <tr>
                            <td>Gaby</td>
                            <td>Red 1</td>
                            <td>1323</td>
                            <td>22</td>
                            <td>Auto</td>
                            <td>68</td>
                        </tr>
                        <tr>
                            <td>Devin</td>
                            <td>Red 2</td>
                            <td>254</td>
                            <td>22</td>
                            <td>Auto</td>
                            <td>67</td>
                        </tr>
                        <tr>
                            <td>Cassie</td>
                            <td>Red 3</td>
                            <td>7157</td>
                            <td>22</td>
                            <td>Auto</td>
                            <td>70</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>Super Scout</td>
                            <td>Alliance</td>
                            <td>Match</td>
                            <td>Status</td>
                            <td>Tablet Battery</td>
                        </tr>
                        <tr>
                            <td>Robyn</td>
                            <td>Blue</td>
                            <td>22</td>
                            <td>Sign-In</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Naomi</td>
                            <td>Red</td>
                            <td>22</td>
                            <td>Sign-In</td>
                            <td>31</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>Match</td>
                            <td>B1</td>
                            <td>B2</td>
                            <td>B3</td>
                            <td>R1</td>
                            <td>R2</td>
                            <td>R3</td>
                            <td>Match</td>
                            <td>B1</td>
                            <td>B2</td>
                            <td>B3</td>
                            <td>R1</td>
                            <td>R2</td>
                            <td>R3</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        );
    }

}
    

// Test on slower connection in the future vvv

export default App;
