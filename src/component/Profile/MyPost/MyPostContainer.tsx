import React from 'react';
import {ActionsTypes, ProfilePageType} from '../../Redux/store';
import {AddPostAC, UpdateNewPostAC} from "../../Redux/myPost-reducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";

// type MyPostTypeProps = {
//     posts: ProfilePageType
//     dispatch: (action: ActionsTypes) => void
//     // addPost: (action: ActionTypes) => void
//     // updateNewPostText: (action: ActionTypes) => void
// }

// const MyPostConta = (props: MyPostTypeProps) => {
//
//     const addPostCB = (el: string) => {
//         props.dispatch(AddPostAC(el))
//     }
//
//     // const onkeydownHandlerCB = () => {
//     //     if (e.key === "Enter") {
//     //         addPostCB()
//     //     }
//     // }
//
//     const onChangeHandlerCB = (text: string) => {
//         props.dispatch(UpdateNewPostAC(text))
//     }
//
//      return <MyPost
//         posts={props.posts}
//         addPostCB={addPostCB}
//         onChangeHandlerCB={onChangeHandlerCB}
//         // onkeydownHandlerCB={onkeydownHandlerCB}
//     />
// }

let mapStateToProps = (state: any) => {
    return {
        posts: state.posts
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        addPostCB: (el: string) => {
            dispatch(AddPostAC(el))
        },
        onChangeHandlerCB: (text: string) => {
            dispatch(UpdateNewPostAC(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)


export default MyPostContainer