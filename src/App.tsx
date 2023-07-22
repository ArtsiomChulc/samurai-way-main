import React, { lazy, Suspense } from "react";
import s from "./App.module.css";
import { Navbar } from "component/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Dialogs from "./component/Dialogs/Dialogs";
// import UsersContainer from "./component/Users/UsersContainer";
// import ProfileContainer from "./component/Profile/ProfileContainer";
// import HeaderContainer from "./component/Header/HeaderContainer";
import LogIn from "./component/common/login/LogIn";
import Settings from "./component/Settings/Settings";
import { connect } from "react-redux";
import { initializeAppTC } from "Redux/app-reducer";
import { AppRootStateType } from "Redux/redux-store";
import Preloader from "./component/common/preloader/Preloader";
import { loginTC } from "Redux/auth-reducer";
import DotPreloader from "component/common/dotPreloader/DotPreloader";
const ProfileContainer = lazy(() => import("./component/Profile/ProfileContainer"));
const HeaderContainer = lazy(() => import("./component/Header/HeaderContainer"));
const UsersContainer = lazy(() => import("./component/Users/UsersContainer"));

// type RootType = {
//     store: StoreType
// }

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        const styleForLazyDownload = {
            fontSize: 40,
            margin: "200px",
        };

        return (
            <div className={s.App}>
                <Suspense
                    fallback={
                        <h1 style={styleForLazyDownload}>
                            Loading
                            <DotPreloader />
                        </h1>
                    }
                >
                    <HeaderContainer />
                </Suspense>
                <div className={s.flexWrap}>
                    <Navbar />
                    <div className={s.profile}>
                        <Suspense fallback={<div>...Loading</div>}>
                            <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
                        </Suspense>
                        <Route path="/Dialogs" render={() => <Dialogs />} />
                        <Suspense
                            fallback={
                                <h1 style={styleForLazyDownload}>
                                    Loading
                                    <DotPreloader />
                                </h1>
                            }
                        >
                            <Route path="/users" render={() => <UsersContainer />} />
                        </Suspense>
                        <Route path="/news" render={() => <News />} />
                        <Route path="/music" render={() => <Music />} />
                        <Route path="/settings" render={() => <Settings />} />
                        <Route path="/login" render={() => <LogIn />} />
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
