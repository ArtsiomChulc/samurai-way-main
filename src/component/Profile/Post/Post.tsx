import React, {useState} from 'react';
import s from './post.module.css';

type PostType = {

	message: string
	likeCount: number
}
export const Post = (props: PostType) => {

	return (
		<div className={s.post}>
			<img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" />
			<span className={s.message_text}>{props.message}</span>

			<span className={s.like}>
				<img src="https://www.svgrepo.com/show/220662/like.svg" alt="" />
				<span className={s.likecount}>
					{props.likeCount}
				</span>
			</span>
		</div>
	)
}