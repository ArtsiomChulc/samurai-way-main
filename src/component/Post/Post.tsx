import React from 'react';
import s from './post.module.css';

type PostType = {
	num: number;
}
export const Post = (props: PostType) => {
	return (
		<div className={s.post}>
			Post {props.num}
		</div>
	)
}