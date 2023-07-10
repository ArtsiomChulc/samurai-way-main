import {AppRootStateType} from "../redux-store";
import {UsersPageType} from "../users-reducer";
import {ProfileType} from "../profile-reducer";


//usersPage

export const getUsersSelector = (state: AppRootStateType): UsersPageType => {
    return state.usersPage
}

export const getPageSize = (state: AppRootStateType): number => {
    return state.usersPage.pageSize
}

export const getTotalUserCount = (state: AppRootStateType): number => {
    return state.usersPage.totalUserCount
}

export const getCurrentPage = (state: AppRootStateType): number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppRootStateType): boolean => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state: AppRootStateType): number[] => {
    return state.usersPage.followingProgress
}


//profilePage

export const getProfileSelector = (state: AppRootStateType): ProfileType | null => {
    return state.profilePage.profile
}

export const getStatus = (state: AppRootStateType): string => {
    return state.profilePage.status
}


//auth

export const getIsAuthSelector = (state: AppRootStateType): boolean => {
    return state.auth.isAuth
}

export const getAuthId = (state: AppRootStateType): any => {
    return state.auth.id
}