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

	// const postsData: PostData[] = [
	// 	{ id: 1, message: 'Hello.....', likeCount: 12 },
	// 	{ id: 2, message: 'Go to home', likeCount: 12 },
	// 	{ id: 3, message: 'I am Artsiom', likeCount: 12 },
	// 	{ id: 4, message: 'Yo Yo Yo', likeCount: 12 },
	// 	{ id: 5, message: 'Mark, how are you?', likeCount: 12 },
	// 	{ id: 6, message: 'Oleg, it\'s good job!!!', likeCount: 12 },
	// ]
	// const messageData: = [
	// 	{ id: 1, message: 'Ok!!!' },
	// 	{ id: 2, message: 'Hello...' },
	// 	{ id: 3, message: 'Goood!! ' },
	// 	{ id: 4, message: 'How are u?' },
	// 	{ id: 5, message: 'I.m OK!!!' },
	// 	{ id: 6, message: 'Yo!!! Go home!!!' },
	// ]

	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPost posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
		</div>
	)
}