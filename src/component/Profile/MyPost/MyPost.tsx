import React from 'react';
import { ProfilePageType } from '../../Redux/State';
import { Post } from '../Post/Post';
import s from './mypost.module.css';

// export type PostsDataType = {
// 	data: PostData[]
// }
// export type PostData = {
// 	id: number
// 	message: string
// 	likeCount: number
// }

export const MyPost = (props: ProfilePageType) => {

	const newPostElement = React.createRef<HTMLTextAreaElement>()

	const addPost = () => {
		alert(newPostElement.current?.value)

	}


	const postElement = props.posts.map(el => {
		return (
			<Post key={el.id} message={el.message} likeCount={el.likeCount} />
		)
	})
	return (
		<div className={s.mypost}>
			<div className={s.wrapAddMessage}>
				<textarea ref={newPostElement}></textarea>
				<button className={s.btn} onClick={addPost}>Add post</button>
			</div>

			{postElement}

		</div>
	)
}