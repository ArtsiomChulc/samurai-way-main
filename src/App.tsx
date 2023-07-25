import React, { lazy } from "react";
import s from "./App.module.css";
import { Navbar } from "component/Navbar/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Dialogs from "./component/Dialogs/Dialogs";
import HeaderContainer from "./component/Header/HeaderContainer";
import LogIn from "./component/common/login/LogIn";
import Settings from "./component/Settings/Settings";
import { connect } from "react-redux";
import { initializeAppTC } from "Redux/app-reducer";
import { AppRootStateType } from "Redux/redux-store";
import Preloader from "./component/common/preloader/Preloader";
import { loginTC } from "Redux/auth-reducer";
import { withSuspense } from "HOC/withSuspense";

const ProfileContainer = lazy(() => import("./component/Profile/ProfileContainer"));
const UsersContainer = lazy(() => import("./component/Users/UsersContainer"));

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <div className={s.App}>
                <HeaderContainer />
                <div className={s.flexWrap}>
                    <Navbar />
                    <div className={s.profile}>
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
                            <Route path="/Profile/:userId?" render={withSuspense(ProfileContainer)} />
                            <Route path="/Dialogs" render={withSuspense(Dialogs)} />
                            <Route path="/users" render={withSuspense(UsersContainer)} />
                            <Route path="/news" render={() => <News />} />
                            <Route path="/music" render={() => <Music />} />
                            <Route path="/settings" render={() => <Settings />} />
                            <Route path="/login" render={() => <LogIn />} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType;
type MapStateToPropsType = {
    initialized: boolean;
};

type MapDispatchToPropsType = {
    initializeAppTC: () => void;
};

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized,
    };
};

export default connect(mapStateToProps, {
    initializeAppTC,
    loginTC,
})(App);
