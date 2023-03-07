import React from 'react';
import { Post } from '../Post/Post';
import s from './mypost.module.css';


export const MyPost = () => {
	return (
		<div className={s.mypost}>
			Mypost
			<Post num={1} />
			<Post num={2} />
			<Post num={3} />
			<Post num={4} />
			<Post num={5} />
		</div>
	)
}