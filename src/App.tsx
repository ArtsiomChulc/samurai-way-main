import React from 'react';
import './App.css';
import { Description } from './component/Description/Description';
import Header from "./component/Header/Header";
import { Main } from './component/Main/Main';
import { MyPost } from './component/MyPost/MyPost';
import { Nav } from './component/Nav/Nav';

function App() {




    return (
        <div className="App">
            <Header />
            <Nav />
            <Main />
            <Description />
            <MyPost />
        </div>
    );
}

export default App;
