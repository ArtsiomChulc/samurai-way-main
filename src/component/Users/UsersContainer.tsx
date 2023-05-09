import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../Redux/redux-store";
import {
    FollowAC,
    SetCurrentPageAC,
    SetUsersAC,
    SetUsersTotalCountAC,
    UnFollowAC,
    UsersPageType,
    UsersType
} from "../Redux/users-reducer";
import {Dispatch} from "redux";



type MapStatePropsTypes = {
    users: UsersPageType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type MapDispatchPropsType = {
    followCB: (userID: number) => void
    unFollowCB: (userID: number) => void
    setUsersCB: (users: Array<UsersType>) => void
    setCurrentPageCB: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
}

export type UsersPropsType = MapStatePropsTypes & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsTypes => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPageCB: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalUserCount: number) => {
            dispatch(SetUsersTotalCountAC(totalUserCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)