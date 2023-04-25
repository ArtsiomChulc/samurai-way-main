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
import {StoreType} from './component/Redux/store';

type StateType = {
    store: StoreType
}

function App(props: StateType) {
    const state = props.store.getState()
    let posts = props.store._state.profilePage;
    let dialogs = props.store._state.dialogsPage.dialogs;
    let messages = props.store._state.dialogsPage.messages;
    let friends = props.store._state.navbarFriends.friends;
    let messageInInput = props.store._state.dialogsPage.messageInInput

    return (

        <div className={s.App}>
            <Header />
            <Navbar friends={friends} />
            <div className={s.profile}>
                <Route path='/Profile'
                       render={() =>
                           <Profile posts={posts}
                                    addPost={props.store.addPost.bind(props.store)}
                                    updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                           />} />
                <Route path='/Dialogs'
                       render={() => <Dialogs
                           messageInInput={messageInInput}
                           dialogs={dialogs}
                           messages={messages}
                           addMessage={props.store.addMessage.bind(props.store)}
                           updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                       />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
            </div>
        </div>

    );
}

export default App;
