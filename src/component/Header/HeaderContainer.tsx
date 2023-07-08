import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {authMeThunkCreator, logOutTC, ToggleFetchAC} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component<HeaderPropsType> {

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

        return (
            <Header {...this.props}/>
        );
    }

}

export type HeaderPropsType = MapDispatchPropsType & MapStatePropsType

type MapStatePropsType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}

type MapDispatchPropsType = {
    // setAuthUserDataCB: (id: number, login: string, email: string) => void
    isFetchingCB: (isFetching: boolean) => void
    authMe: () => void
    logOutTC: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
    }

}

export default connect(mapStateToProps, {
    // setAuthUserDataCB: SetUserDataAC,
    isFetchingCB: ToggleFetchAC,
    authMe: authMeThunkCreator,
    logOutTC
})(HeaderContainer);