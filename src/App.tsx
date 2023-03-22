import React from 'react';
import s from './App.module.css';
import { Dialogs } from './component/Dialogs/Dialogs';
import Header from "./component/Header/Header";
import { Music } from './component/Music/Music';
import { Navbar } from './component/Navbar/Navbar';
import { News } from './component/News/News';
import { Profile } from './component/Profile/Profile';
import { Settings } from './component/Settings/Settings';
import { Route } from 'react-router-dom';
import { addPost, RootStateType } from './component/Redux/State';

type StateType = {
    state: RootStateType
}

function App(props: StateType) {
    let posts = props.state.profilePage.posts;
    let dialogs = props.state.dialogsPage.dialogs;
    let messages = props.state.dialogsPage.messages;
    let friends = props.state.navbarFriends.friends;
    return (

        <div className={s.App}>
            <Header />
            <Navbar friends={friends} />
            <div className={s.profile}>
                <Route path='/Profile' render={() => <Profile posts={posts} addPost={addPost} />} />
                <Route path='/Dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages} />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
            </div>
        </div>

    );
}

export default App;
