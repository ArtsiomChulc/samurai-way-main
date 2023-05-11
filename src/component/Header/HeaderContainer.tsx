import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {SetUserDataAC, ToggleFetchAC} from "../Redux/auth-reducer";


class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.isFetchingCB(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                this.props.isFetchingCB(false)
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserDataCB(response.data.data.id, response.data.data.login, response.data.data.email)
                }
            })
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
    setAuthUserDataCB: (id: number, login: string, email: string) => void
    isFetchingCB: (isFetching: boolean) => void
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
    setAuthUserDataCB: SetUserDataAC,
    isFetchingCB: ToggleFetchAC
})(HeaderContainer);