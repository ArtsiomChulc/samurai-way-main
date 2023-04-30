import React from 'react';
import {ActionsTypes, ProfilePageType} from '../../Redux/store';
import {AddPostAC, UpdateNewPostAC} from "../../Redux/myPost-reducer";
import {MyPost} from "./MyPost";

type MyPostTypeProps = {
    posts: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    // addPost: (action: ActionTypes) => void
    // updateNewPostText: (action: ActionTypes) => void
}

export const MyPostContainer = (props: MyPostTypeProps) => {

    const addPostCB = (el: string) => {
        props.dispatch(AddPostAC(el))
    }

    // const onkeydownHandlerCB = () => {
    //     if (e.key === "Enter") {
    //         addPostCB()
    //     }
    // }

    const onChangeHandlerCB = (text: string) => {
        props.dispatch(UpdateNewPostAC(text))
    }

    return <MyPost
        posts={props.posts}
        addPostCB={addPostCB}
        onChangeHandlerCB={onChangeHandlerCB}
        // onkeydownHandlerCB={onkeydownHandlerCB}
    />
}