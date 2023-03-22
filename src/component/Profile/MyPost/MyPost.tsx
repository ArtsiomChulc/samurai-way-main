import React from 'react';
import { PostType } from '../../Redux/State';
import { Post } from '../Post/Post';
import s from './mypost.module.css';

type MyPostTypeProps = {
	posts: PostType[]
	addPost: (post: string) => void
}


// export type PostsDataType = {
// 	data: PostData[]
// }
// export type PostData = {
// 	id: number
// 	message: string
// 	likeCount: number
// }

export const MyPost = (props: MyPostTypeProps) => {

	const newPostElement = React.createRef<HTMLTextAreaElement>()

	const addPost = () => {
		props.addPost(newPostElement.current ? newPostElement.current.value : '----')
		newPostElement.current!.value = ''
		// if (newPostElement.current?.value.length === 0) {

		// }
	}


	const postElement = props.posts.map(el => {
		return (
			<Post key={el.id} message={el.post} likeCount={el.likeCount} />
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