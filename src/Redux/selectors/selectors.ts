import { AppRootStateType } from "../redux-store";
import { UsersPageType } from "../users-reducer";
import { ProfileType } from "../profile-reducer";
import { DialogsPageType } from "../dialogs-reducer";
import { createSelector } from "reselect";

//usersPage

const getUsersSelector = (state: AppRootStateType): UsersPageType => {
    return state.usersPage;
};

//     ===== with reselect =====   /////

export const getUsersReselect = createSelector(getUsersSelector, (users) => {
    return users;
});

export const getPageSize = (state: AppRootStateType): number => {
    return state.usersPage.pageSize;
};

export const getTotalUserCount = (state: AppRootStateType): number => {
    return state.usersPage.totalUserCount;
};

export const getCurrentPage = (state: AppRootStateType): number => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppRootStateType): boolean => {
    return state.usersPage.isFetching;
};

export const getFollowingProgress = (state: AppRootStateType): number[] => {
    return state.usersPage.followingProgress;
};

//profilePage

const getProfileSelector = (state: AppRootStateType): ProfileType | null => {
    return state.profilePage.profile;
};

//     ===== with reselect =====   /////

export const getProfileReselect = createSelector(getProfileSelector, (profile) => {
    return profile;
});

export const getStatus = (state: AppRootStateType): string => {
    return state.profilePage.status;
};

//dialogsPage

export const getDialogsPageSelector = (state: AppRootStateType): DialogsPageType => {
    return state.dialogsPage;
};

//auth

export const getIsAuthSelector = (state: AppRootStateType): boolean => {
    return state.auth.isAuth;
};

export const getAuthId = (state: AppRootStateType): any => {
    return state.auth.id;
};

export const getPortionSize = (state: AppRootStateType) => {
    return state.usersPage.portionSize;
};
