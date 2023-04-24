import React from 'react';
import s from './profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPost } from './MyPost/MyPost';
import { ProfilePageType } from '../Redux/State';

type ProfilePropsType = {
	posts: ProfilePageType
	addPost: () => void
	updateNewPostText: (text: string) => void
}

export const Profile = (props: ProfilePropsType) => {

	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPost posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
		</div>
	)
}