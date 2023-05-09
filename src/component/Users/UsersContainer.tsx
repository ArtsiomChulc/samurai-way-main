import React from 'react';
import {connect} from "react-redux";
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
import axios from "axios";
import {Users} from "./Users";

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersCB(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
                console.log(response)
            })
    }

    onPageCount = (page: number) => {
        this.props.setCurrentPageCB(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersCB(response.data.items)
            })
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageCount={this.onPageCount}
                unFollowCB={this.props.unFollowCB}
                followCB={this.props.followCB}
            />
        )
    }
}


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


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)