import React from 'react';
import s from './profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPost/MyPostContainer";

// type ProfilePropsType = {
// 	posts: ProfilePageType
// 	dispatch: (action: ActionsTypes) => void
// 	// addPost: (action: ActionTypes) => void
// 	// updateNewPostText: (action: ActionTypes) => void
// }

export const Profile = () => {

	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPostContainer />
		</div>
	)
}