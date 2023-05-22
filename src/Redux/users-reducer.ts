import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UsersPageType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}

export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: PhotosType
    status: null
    uniqueUrlName: null
}

type PhotosType = {
    small: null
    large: null
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-USERS-TOTAL-COUNT":
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        case "TOGGLE-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING": {
            return {
                ...state,
                followingProgress: action.isFollowing
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

type FollowType = ReturnType<typeof FollowSuccessAC>
type UnFollowType = ReturnType<typeof UnFollowSuccessAC>
type SetUsersType = ReturnType<typeof SetUsersAC>
type SetCurrentPageType = ReturnType<typeof SetCurrentPageAC>
type SetUsersTotalCountType = ReturnType<typeof SetUsersTotalCountAC>
type ToggleFetchingType = ReturnType<typeof ToggleFetchingAC>
type ToggleFollowingProgressType = ReturnType<typeof ToggleFollowingProgressAC>
type ActionsType = FollowType
    | UnFollowType
    | SetUsersType
    | SetCurrentPageType
    | SetUsersTotalCountType
    | ToggleFetchingType
    | ToggleFollowingProgressType


// Action Creators

export const FollowSuccessAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}
export const UnFollowSuccessAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}

export const SetUsersAC = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const SetCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    } as const
}

export const SetUsersTotalCountAC = (totalUserCount: number) => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        totalUserCount: totalUserCount
    } as const
}

export const ToggleFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE-FETCHING",
        isFetching
    } as const
}

export const ToggleFollowingProgressAC = (isFollowing: boolean, userId: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING",
        isFollowing,
        userId
    } as const
}

// THUNK

export const getUsersThunkCreator = ( currentPage: number, pageSize: number ) => {

    return (dispatch: Dispatch) => {
        dispatch(ToggleFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(SetCurrentPageAC(currentPage))
            dispatch(ToggleFetchingAC(false))
            dispatch(SetUsersAC(data.items))
            dispatch(SetUsersTotalCountAC(data.totalCount))
        })
    }
}

export const followThunkCreator = (id: number) => {

    return (dispatch: Dispatch) => {
        dispatch(ToggleFollowingProgressAC(true, id))
        usersAPI.postFollowStatus(id).then(data => {
            if (data.resultCode === 0) {
               dispatch(FollowSuccessAC(id))
            }
            dispatch(ToggleFollowingProgressAC(false, id))
        })
    }
}

export const unFollowThunkCreator = (id: number) => {

    return (dispatch: Dispatch) => {
        dispatch(ToggleFollowingProgressAC(true, id))
        usersAPI.deleteFollowStatus(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(UnFollowSuccessAC(id))
            }
            dispatch(ToggleFollowingProgressAC(false, id))
        })
    }
}

export default usersReducer