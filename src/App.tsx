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
import state from './component/Redux/State'


// export const dialogsData = [
//     { id: 1, text: 'Dimych' },
//     { id: 2, text: 'Andrey' },
//     { id: 3, text: 'Sasha' },
//     { id: 4, text: 'Sveta' },
//     { id: 5, text: 'Mark' },
//     { id: 6, text: 'Oleg' },
// ]
// export const messageData = [
//     { id: 1, text: 'Ok!!!' },
//     { id: 2, text: 'Hello...' },
//     { id: 3, text: 'Goood!!' },
//     { id: 4, text: 'How are u?' },
//     { id: 5, text: 'I.m OK!!!' },
//     { id: 6, text: 'Yo!!! Go home!!!' },
// ]

function App() {
    let posts = state.profilePage.posts;
    let dialogs = state.dialogsPage.dialogs;
    let messages = state.dialogsPage.messages;
    let friends = state.navbarFriends.friends;
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header />
                <Navbar friends={friends} />
                <div className={s.profile}>
                    <Route path='/Profile' render={() => <Profile posts={posts} />} />
                    <Route path='/Dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages} />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
