import './App.css';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signedIn: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const answers = e.target.elements;
        console.log(answers);
        this.setState({signedIn: true, name: answers.name.value, event: answers.event.value});
    }

    render() {
        return (
            <main>
                <h1>Scouting PASS</h1>
                {
                    this.state.signedIn ?
                    (<div className="content">
                        <p>Name: {this.state.name}</p>
                        <p>Event: {this.state.event}</p>
                    </div>) :
                    <SignIn onSubmit={this.handleSubmit} />
                }
            </main>
        );
    }
}

class SignIn extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="overlay"></div>
                <div className="popup">
                    <form action="#" onSubmit={this.props.onSubmit}>
                        <h2>Sign In</h2>
                        <p><label htmlFor="name">Name</label><input type="text" id="name" /></p>
                        <p><label htmlFor="event">Event</label><input type="text" id="event" /></p>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
