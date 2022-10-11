import './App.css';

function App() {
    return (
        <main>
            <h1>Scouting PASS</h1>
            <SignIn />
        </main>
    );
}

function SignIn() {
    return (
        <div>
            <div className="overlay"></div>
            <div className="popup">
                <form>
                    <h2>Sign In</h2>
                    <p><label htmlFor="name">Name</label><input type="text" name="name" /></p>
                    <p><label htmlFor="event">Event</label><input type="text" name="event" /></p>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}

export default App;
