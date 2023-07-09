import React from 'react';
import s from './App.module.css';
import {Navbar} from './component/Navbar/Navbar';
import {Route} from 'react-router-dom';
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Dialogs from "./component/Dialogs/Dialogs";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import LogIn from "./component/common/login/LogIn";
import Settings from "./component/Settings/Settings";
import {connect} from "react-redux";
import {authMeThunkCreator} from "./Redux/auth-reducer";


// type RootType = {
//     store: StoreType
// }

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.authMe()
        //  this.props.isFetchingCB(true)
        // authAPI.getAuthMe().then(response => {
        //          this.props.isFetchingCB(false)
        //          if (response.data.resultCode === 0) {
        //              this.props.setAuthUserDataCB(response.data.data.id, response.data.data.login, response.data.data.email)
        //          }
        //      })
    }

    render() {

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
                           />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <LogIn/>}/>
                </div>
            </div>

        )
    }
}

type AppPropsType = {
    authMe: () => void
}



export default connect(null, {
    authMe: authMeThunkCreator
})(App);
