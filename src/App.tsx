import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.css';
import { Dialogs } from './component/Dialogs/Dialogs';
import Header from "./component/Header/Header";
import { Navbar } from './component/Navbar/Navbar';
import { Profile } from './component/Profile/Profile';


function App() {




    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header />
                <Navbar />
                <div className={s.profile}>
                    <Route path='/Profile' component={Profile} />
                    <Route path='/Dialogs' component={Dialogs} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
