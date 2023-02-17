import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
        </div>
    );
}

function Header() {
    return (
        <>
            <a>Home</a>
            <a>News feed</a>
            <a>Messages</a>
        </>
    );
}

export default App;
