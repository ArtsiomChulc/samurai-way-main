import React from 'react';
import s from './profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPost } from './MyPost/MyPost';
import {ActionsTypes, ProfilePageType} from '../Redux/store';
import {MyPostContainer} from "./MyPost/MyPostContainer";

type ProfilePropsType = {
	posts: ProfilePageType
	dispatch: (action: ActionsTypes) => void
	// addPost: (action: ActionTypes) => void
	// updateNewPostText: (action: ActionTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPostContainer posts={props.posts} dispatch={props.dispatch} />
		</div>
	)
}