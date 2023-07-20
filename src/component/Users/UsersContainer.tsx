import React from "react";
import { connect } from "react-redux";
import { AppRootStateType } from "Redux/redux-store";
import {
    followThunkCreator,
    getUsersThunkCreator,
    SetCurrentPageAC,
    SetUsersAC,
    SetUsersTotalCountAC,
    ToggleFetchingAC,
    ToggleFollowingProgressAC,
    unFollowThunkCreator,
    UsersPageType,
    UsersType,
} from "Redux/users-reducer";
import { Users } from "./Users";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsersReselect,
    getPortionSize,
} from "Redux/selectors/selectors";

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleFetchingCB(true)
        // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleFetchingCB(false)
        //     this.props.setUsersCB(data.items)
        //     this.props.setTotalUserCount(data.totalCount)
        // })
    }

    onPageCount = (page: number) => {
        this.props.getUsers(page, this.props.pageSize);
        // this.props.setCurrentPageCB(page)
        // this.props.toggleFetchingCB(true)
        // getUsers(page, this.props.pageSize).then(data => {
        //     this.props.toggleFetchingCB(false)
        //     this.props.setUsersCB(data.items)
        // })
    };

    render() {
        //REDIRECT
        // if (!this.props.isAuth) return <Redirect to={'login'}/>

        return this.props.isFetching ? (
            <Preloader />
        ) : (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageCount={this.onPageCount}
                toggleFollowingCB={this.props.toggleFollowingCB}
                followingProgress={this.props.followingProgress}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                portionSize={this.props.portionSize}
            />
        );
    }
}

type MapStatePropsTypes = {
    users: UsersPageType;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingProgress: Array<number>;
    portionSize: number;
    // isAuth: boolean
};

export type MapDispatchPropsType = {
    setUsersCB: (users: Array<UsersType>) => void;
    setCurrentPageCB: (currentPage: number) => void;
    setTotalUserCount: (totalUserCount: number) => void;
    toggleFetchingCB: (isFetching: boolean) => void;
    toggleFollowingCB: (isFollowing: boolean, id: number) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
    follow: (id: number) => void;
    unFollow: (id: number) => void;
};

export type UsersPropsType = MapStatePropsTypes & MapDispatchPropsType;

let mapStateToProps = (state: AppRootStateType): MapStatePropsTypes => {
    return {
        users: getUsersReselect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
        portionSize: getPortionSize(state),
        // isAuth: state.auth.isAuth
    };
};

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

// const DoubleConnectComponent = withAuthRedirect(UsersContainer)
//
// export default connect(mapStateToProps, {
//     setUsersCB: SetUsersAC,
//     setCurrentPageCB: SetCurrentPageAC,
//     setTotalUserCount: SetUsersTotalCountAC,
//     toggleFetchingCB: ToggleFetchingAC,
//     toggleFollowingCB: ToggleFollowingProgressAC,
//     getUsers:  getUsersThunkCreator,
//     follow: followThunkCreator,
//     unFollow: unFollowThunkCreator
// })(DoubleConnectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsersCB: SetUsersAC,
        setCurrentPageCB: SetCurrentPageAC,
        setTotalUserCount: SetUsersTotalCountAC,
        toggleFetchingCB: ToggleFetchingAC,
        toggleFollowingCB: ToggleFollowingProgressAC,
        getUsers: getUsersThunkCreator,
        follow: followThunkCreator,
        unFollow: unFollowThunkCreator,
    }),
    // withAuthRedirect
)(UsersContainer);
