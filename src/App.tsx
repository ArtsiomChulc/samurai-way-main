import React from 'react';
import s from './App.module.css';
import {Navbar} from './component/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {News} from "./component/News/News";
import {Music} from "./component/Music/Music";
import {Settings} from "./component/Settings/Settings";
import {Dialogs} from "./component/Dialogs/Dialogs";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";


// type RootType = {
//     store: StoreType
// }

function App() {

    // const state = props.store.getState()
    // let posts = state.profilePage;
    // let dialogs = state.dialogsPage.dialogs;
    // let messages = state.dialogsPage.messages;
    // let friends = state.navbarFriends.friends;
    // let messageInInput = state.dialogsPage.messageInInput;

    return (

        <div className={s.App}>
            <HeaderContainer/>
            <Navbar/>
            <div className={s.profile}>
                <Route path='/Profile/:userId?'
                       render={() =>
                           <ProfileContainer
                               // posts={posts}
                               // dispatch={props.store.dispatch.bind(props.store)}
                               // addPost={props.store.dispatch.bind(props.store)}
                               // updateNewPostText={props.store.dispatch.bind(props.store)}
                           />}/>
                <Route path='/Dialogs'
                       render={() => <Dialogs
                           // messageInInput={messageInInput}
                           // dialogs={dialogs}
                           // messages={messages}
                           // dispatch={props.store.dispatch.bind(props.store)}
                           // addMessage={props.store.dispatch.bind(props.store)}
                           // updateNewMessageText={props.store.dispatch.bind(props.store)}
                       />} />
                <Route path='/users' render={() => <UsersContainer/>} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
            </div>
        </div>

    )
}

export default App;
