import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    followThunkCreator,
    getUsersThunkCreator,
    SetCurrentPageAC, SetUsersAC,
    SetUsersTotalCountAC,
    ToggleFetchingAC,
    ToggleFollowingProgressAC,
    unFollowThunkCreator,
    UsersPageType, UsersType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import Preloader from "../common/preloader/Preloader";



class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleFetchingCB(true)
        // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleFetchingCB(false)
        //     this.props.setUsersCB(data.items)
        //     this.props.setTotalUserCount(data.totalCount)
        // })
    }

    onPageCount = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
        // this.props.setCurrentPageCB(page)
        // this.props.toggleFetchingCB(true)
        // getUsers(page, this.props.pageSize).then(data => {
        //     this.props.toggleFetchingCB(false)
        //     this.props.setUsersCB(data.items)
        // })
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
                    toggleFollowingCB={this.props.toggleFollowingCB}
                    followingProgress={this.props.followingProgress}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
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
    followingProgress: Array<number>
}

export type MapDispatchPropsType = {
    setUsersCB: (users: Array<UsersType>) => void
    setCurrentPageCB: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    toggleFetchingCB: (isFetching: boolean) => void
    toggleFollowingCB: (isFollowing: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
}

export type UsersPropsType = MapStatePropsTypes & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsTypes => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
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
    setUsersCB: SetUsersAC,
    setCurrentPageCB: SetCurrentPageAC,
    setTotalUserCount: SetUsersTotalCountAC,
    toggleFetchingCB: ToggleFetchingAC,
    toggleFollowingCB: ToggleFollowingProgressAC,
    getUsers:  getUsersThunkCreator,
    follow: followThunkCreator,
    unFollow: unFollowThunkCreator
})(UsersAPIComponent)