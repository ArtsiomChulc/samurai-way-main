import React from 'react';
import s from './post.module.css';
import EditableSpanPost from "../../common/editableSpan/EditableSpanPost";

type PostType = {
	message: string
	likeCount: number
	onChangeMessage: (newMessage: string) => void
}
export const Post = (props: PostType) => {

	const onChangeMessage = (newMessage: string) => {
		props.onChangeMessage(newMessage)
	}

	return (
		<div className={s.post}>
			<img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" />
			{/*<span className={s.message_text}>{props.message}</span>*/}
			<span className={s.message_text}>
				<EditableSpanPost
					message={props.message}
					onChangeMessageCB={onChangeMessage}
				/>
			</span>


			<span className={s.like}>
				<img src="https://www.svgrepo.com/show/220662/like.svg" alt="" />
				<span className={s.likeCount}>
					{props.likeCount}
				</span>
			</span>
		</div>
	)
}