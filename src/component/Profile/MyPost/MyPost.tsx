import React from 'react';
import { Post } from '../Post/Post';
import s from './mypost.module.css';


export const MyPost = () => {

	return (
		<div className={s.mypost}>
			Mypost
			<div>
				<input type="text" />
				<button>Add post</button>
			</div>

			<Post message={'Hi how are you?'} likeCount={15} />
			<Post message={'Hello.....'} likeCount={5} />
			<Post message={'Go to home'} likeCount={25} />
			<Post message={'I am Artsiom'} likeCount={1} />
			<Post message={'Yo Yo Yo'} likeCount={8} />
		</div>
	)
}