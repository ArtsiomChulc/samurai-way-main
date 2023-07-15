import React from "react";
import { AddPostAC, ChangeMessageAC, ProfilePageType, UpdateNewPostAC } from "Redux/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppRootStateType } from "Redux/redux-store";

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
