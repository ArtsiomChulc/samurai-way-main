import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.css';
import { Dialogs } from './component/Dialogs/Dialogs';
import Header from "./component/Header/Header";
import { Music } from './component/Music/Music';
import { Navbar } from './component/Navbar/Navbar';
import { News } from './component/News/News';
import { Profile } from './component/Profile/Profile';
import { Settings } from './component/Settings/Settings';


function App() {




    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header />
                <Navbar />
                <div className={s.profile}>
                    <Route path='/Profile' component={Profile} />
                    <Route path='/Dialogs' component={Dialogs} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
