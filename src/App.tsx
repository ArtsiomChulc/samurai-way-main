import React from 'react';
import './App.css';
import { Description } from './component/Description/Description';
import Header from "./component/Header/Header";
import { Main } from './component/Main/Main';
import { Nav } from './component/Nav/Nav';
import { Profile } from './component/Profile/Profile';

function App() {




    return (
        <div className="App">
            <Header />
            <Nav />
            <Main />
            <Description />
            <Profile />
        </div>
    );
}

export default App;
