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
import {addMessage, RootStateType, updateNewMessageText} from './component/Redux/State';

type StateType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (text: string) => void
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}

function App(props: StateType) {
    let posts = props.state.profilePage;
    let dialogs = props.state.dialogsPage.dialogs;
    let messages = props.state.dialogsPage.messages;
    let friends = props.state.navbarFriends.friends;

    return (

        <div className={s.App}>
            <Header />
            <Navbar friends={friends} />
            <div className={s.profile}>
                <Route path='/Profile'
                       render={() =>
                           <Profile posts={posts}
                                    addPost={props.addPost}
                                    updateNewPostText={props.updateNewPostText}
                           />} />
                <Route path='/Dialogs'
                       render={() => <Dialogs
                           dialogs={dialogs}
                           messages={messages}
                           addMessage={addMessage}
                           updateNewMessageText={updateNewMessageText}
                       />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
            </div>
        </div>

    );
}

export default App;
