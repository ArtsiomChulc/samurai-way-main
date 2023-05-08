import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../Redux/redux-store";
import {FollowAC, SetUsersAC, UnFollowAC, UsersPageType, UsersType} from "../Redux/users-reducer";
import {Dispatch} from "redux";



type MapStatePropsTypes = {
    users: UsersPageType
}

export type MapDispatchPropsType = {
    followCB: (userID: number) => void
    unFollowCB: (userID: number) => void
    setUsersCB: (users: Array<UsersType>) => void
}

export type UsersPropsType = MapStatePropsTypes & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsTypes => {
    return {
        users: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        followCB: (userID: number) => {
            dispatch(FollowAC(userID))
        },
        unFollowCB: (userID: number) => {
            dispatch(UnFollowAC(userID))
        },
        setUsersCB: (users: Array<UsersType>) => {
            dispatch(SetUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)