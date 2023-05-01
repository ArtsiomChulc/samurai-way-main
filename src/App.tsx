import React from 'react';
import s from './App.module.css';
import Header from "./component/Header/Header";
import {Navbar} from './component/Navbar/Navbar';
import {Profile} from './component/Profile/Profile';
import {Route} from 'react-router-dom';


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
            <Header/>
            <Navbar/>
            <div className={s.profile}>
                <Route path='/Profile'
                       render={() =>
                           <Profile
                               // posts={posts}
                               // dispatch={props.store.dispatch.bind(props.store)}
                               // addPost={props.store.dispatch.bind(props.store)}
                               // updateNewPostText={props.store.dispatch.bind(props.store)}
                           />}/>
                {/*<Route path='/Dialogs'*/}
                {/*       render={() => <Dialogs*/}
                {/*           messageInInput={messageInInput}*/}
                {/*           dialogs={dialogs}*/}
                {/*           messages={messages}*/}
                {/*           dispatch={props.store.dispatch.bind(props.store)}*/}
                {/*           // addMessage={props.store.dispatch.bind(props.store)}*/}
                {/*           // updateNewMessageText={props.store.dispatch.bind(props.store)}*/}
                {/*       />} />*/}
                {/*<Route path='/news' render={() => <News />} />*/}
                {/*<Route path='/music' render={() => <Music />} />*/}
                {/*<Route path='/settings' render={() => <Settings />} />*/}
            </div>
        </div>

    )
}

export default App;
