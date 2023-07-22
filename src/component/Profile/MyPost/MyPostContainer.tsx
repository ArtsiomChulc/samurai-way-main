import React from "react";
import { AddPostAC, ChangeMessageAC, ProfilePageType } from "Redux/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppRootStateType } from "Redux/redux-store";

type MapStatePropsType = {
    posts: ProfilePageType;
};
type MapDispatchPropsType = {
    addPostCB: (el: string) => void;
    // onChangeHandlerCB: (text: string) => void
    onChangeMessageCB: (newMessage: string, id: number) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage,
    };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostCB: (el: string) => {
            dispatch(AddPostAC(el));
        },

        // onChangeHandlerCB: (text: string) => {
        //     dispatch(UpdateNewPostAC(text))
        // },
        onChangeMessageCB: (newMessage: string, id: number) => {
            dispatch(ChangeMessageAC(newMessage, id));
        },
    };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
