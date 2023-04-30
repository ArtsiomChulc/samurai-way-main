import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ProfilePageType} from '../../Redux/store';
import { Post } from '../Post/Post';
import s from './mypost.module.css';

type MyPostTypeProps = {
	posts: ProfilePageType
	addPostCB: (el: string) => void
	onChangeHandlerCB: (text: string) => void
	// dispatch: (action: ActionsTypes) => void
	// addPost: (action: ActionTypes) => void
	// updateNewPostText: (action: ActionTypes) => void
}

export const MyPost = (props: MyPostTypeProps) => {
	const [error, setError] = useState<string | null>(null)

	const newPostElement = React.createRef<HTMLTextAreaElement>()

	const addPost = () => {
		let el = newPostElement.current ? newPostElement.current.value : '---'
		if (newPostElement.current?.value.trim() !== '') {
			setError('')
		} else {
			setError('Введите текст!!!')
		}
		props.addPostCB(el)
	}

	const onkeydownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if(e.key === "Enter") {
			addPost()
		}
	}

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let newText = e.currentTarget.value
		props.onChangeHandlerCB(newText)
	}

	const postElement = props.posts.posts.map(el => {
		return (
			<Post key={el.id} message={el.post} likeCount={el.likeCount} />
		)
	})
	return (
		<div className={s.mypost}>
			<div className={s.wrapAddMessage}>
				<textarea
					onKeyDown={onkeydownHandler}
					onChange={onChangeHandler}
					ref={newPostElement}
					value={props.posts.newText}
					placeholder={"Enter your post"}
				/>
				<div>
					<button className={s.btn} onClick={addPost}>Add post</button>
				</div>

				{error && <span className={s.errorText}>{error}</span>}
			</div>

			{postElement}

		</div>
	)
}