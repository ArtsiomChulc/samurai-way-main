import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import { Post } from '../Post/Post';
import s from './mypost.module.css';
import {UsersPropsType} from "./MyPostContainer";



export const MyPost = (props: UsersPropsType) => {
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
		const onChangeMessage = (newMessage: string) => {
			props.onChangeMessageCB(newMessage, el.id)
		}
		return (
			<Post key={el.id}
				  message={el.post}
				  likeCount={el.likeCount}
				  onChangeMessage={onChangeMessage}
			/>
		)
	})
	return (
		<div className={s.myPost}>
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