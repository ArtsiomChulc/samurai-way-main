import { ApiType, usersAPI } from "../api/api";
import { AnyAction, Dispatch } from "redux";
import { AxiosResponse } from "axios";

const FOLLOW = "USERS/FOLLOW" as const;
const UNFOLLOW = "USERS/UNFOLLOW" as const;
const SET_USERS = "USERS/SET-USERS" as const;
const SET_CURRENT_PAGE = "USERS/SET-CURRENT-PAGE" as const;
const SET_USERS_TOTAL_COUNT = "USERS/SET-USERS-TOTAL-COUNT" as const;
const TOGGLE_FETCHING = "USERS/TOGGLE-FETCHING" as const;
const TOGGLE_IS_FOLLOWING = "USERS/TOGGLE-IS-FOLLOWING" as const;

export type UsersPageType = {
    users: UsersType[];
    pageSize: number;
    totalUserCount: number;
    currentPage: number;
    isFetching: boolean;
    followingProgress: Array<number>;
};

export type UsersType = {
    followed: boolean;
    id: number;
    name: string;
    photos: PhotosType;
    status: null;
    uniqueUrlName: null;
};

type PhotosType = {
    small: null;
    large: null;
};

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
};

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => (u.id === action.userID ? { ...u, followed: true } : u)),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => (u.id === action.userID ? { ...u, followed: false } : u)),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUserCount,
            };
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingProgress: action.isFollowing
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter((id) => id != action.userId),
            };
        }
        default:
            return state;
    }
};

type FollowType = ReturnType<typeof FollowSuccessAC>;
type UnFollowType = ReturnType<typeof UnFollowSuccessAC>;
type SetUsersType = ReturnType<typeof SetUsersAC>;
type SetCurrentPageType = ReturnType<typeof SetCurrentPageAC>;
type SetUsersTotalCountType = ReturnType<typeof SetUsersTotalCountAC>;
type ToggleFetchingType = ReturnType<typeof ToggleFetchingAC>;
type ToggleFollowingProgressType = ReturnType<typeof ToggleFollowingProgressAC>;
type ActionsType =
    | FollowType
    | UnFollowType
    | SetUsersType
    | SetCurrentPageType
    | SetUsersTotalCountType
    | ToggleFetchingType
    | ToggleFollowingProgressType;

// Action Creators

export const FollowSuccessAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID,
    } as const;
};
export const UnFollowSuccessAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID,
    } as const;
};

export const SetUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users,
    } as const;
};

export const SetCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    } as const;
};

export const SetUsersTotalCountAC = (totalUserCount: number) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalUserCount: totalUserCount,
    } as const;
};

export const ToggleFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_FETCHING,
        isFetching,
    } as const;
};

export const ToggleFollowingProgressAC = (isFollowing: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFollowing,
        userId,
    } as const;
};

// THUNK

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(ToggleFetchingAC(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(SetCurrentPageAC(currentPage));
        dispatch(ToggleFetchingAC(false));
        dispatch(SetUsersAC(data.items));
        dispatch(SetUsersTotalCountAC(data.totalCount));
    };
};

const followUnfollowFlow = async (
    dispatch: Dispatch,
    id: number,
    apiMethod: (id: number) => Promise<ApiType>,
    actionCreator: (id: number) => AnyAction,
) => {
    dispatch(ToggleFollowingProgressAC(true, id));
    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(ToggleFollowingProgressAC(false, id));
};

export const followThunkCreator = (id: number) => {
    return async (dispatch: Dispatch) => {
        const apiMethod: (val: number) => Promise<ApiType> = usersAPI.postFollowStatus.bind(usersAPI);

        const actionCreator = FollowSuccessAC;
        await followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
    };
};

export const unFollowThunkCreator = (id: number) => {
    const apiMethod = usersAPI.deleteFollowStatus.bind(usersAPI);
    const actionCreator = UnFollowSuccessAC;
    return async (dispatch: Dispatch) => {
        dispatch(ToggleFollowingProgressAC(true, id));
        let data = await apiMethod(id);
        if (data.resultCode === 0) {
            dispatch(actionCreator(id));
        }
        dispatch(ToggleFollowingProgressAC(false, id));
    };
};

export default usersReducer;
