import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

function Header() {
    return (
        <>
            <a>Home</a>
            <a>News Feed</a>
            <a>Messages</a>
        </>
    );
}

function Technologies() {
    return (
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
            </ul>
        </div>
    )
}

export default App;
