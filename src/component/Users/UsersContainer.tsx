import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import s from './users.module.css'
import {
    FollowAC,
    SetCurrentPageAC,
    SetUsersAC,
    SetUsersTotalCountAC, ToggleFetchingAC,
    UnFollowAC,
    UsersPageType,
    UsersType
} from "../Redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
                this.props.toggleFetchingCB(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetchingCB(false)
                this.props.setUsersCB(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageCount = (page: number) => {
        this.props.setCurrentPageCB(page)
        this.props.toggleFetchingCB(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetchingCB(false)
                this.props.setUsersCB(response.data.items)
            })
    }

    render() {

        return (
            this.props.isFetching
                ? <Preloader/>
                : <Users
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
    isFetching: boolean
}

export type MapDispatchPropsType = {
    followCB: (userID: number) => void
    unFollowCB: (userID: number) => void
    setUsersCB: (users: Array<UsersType>) => void
    setCurrentPageCB: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    toggleFetchingCB: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsTypes & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsTypes => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         followCB: (userID: number) => {
//             dispatch(FollowAC(userID))
//         },
//         unFollowCB: (userID: number) => {
//             dispatch(UnFollowAC(userID))
//         },
//         setUsersCB: (users: Array<UsersType>) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPageCB: (currentPage: number) => {
//             dispatch(SetCurrentPageAC(currentPage))
//         },
//         setTotalUserCount: (totalUserCount: number) => {
//             dispatch(SetUsersTotalCountAC(totalUserCount))
//         },
//         toggleFetchingCB: (isFetching: boolean) => {
//             dispatch(ToggleFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    followCB: FollowAC,
    unFollowCB: UnFollowAC,
    setUsersCB: SetUsersAC,
    setCurrentPageCB: SetCurrentPageAC,
    setTotalUserCount: SetUsersTotalCountAC,
    toggleFetchingCB: ToggleFetchingAC
})(UsersAPIComponent)