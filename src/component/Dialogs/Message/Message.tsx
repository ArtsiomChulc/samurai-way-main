
import s from './message.module.css'
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {MessagePropsType} from "./MessageContainer";


export const Message = (props: MessagePropsType) => {

	const [error, setError] = useState<string | null>(null)
	const newTextElement = React.createRef<HTMLTextAreaElement>()

	const addMessage = () => {
		let el = newTextElement.current ? newTextElement.current.value : '---'
		if (newTextElement.current?.value.trim() !== '') {
			setError('')
		} else {
			setError('Введите текст!!!')
		}
		props.addMessageCB(el)
	}

	const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter") {
			addMessage()
		}
	}

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let textMessage = e.currentTarget.value
		props.onChangeHandlerCB(textMessage)
	}

	const elMessages = props.dialogsPage.messages.map(el => {
		return (
			<span key={el.id}>{el.message}</span>
		)
	})
	return (
		<div>
			<div className={s.message}>
				{elMessages}
			</div>
			<div className={s.wrapAddMessage}>
				<textarea value={props.dialogsPage.messageInInput}
						  onKeyDown={onKeyDownHandler}
						  ref={newTextElement}
						  onChange={onChangeHandler}
						  placeholder={"Enter your message"}
				/>
				<button onClick={addMessage} className={s.btn}>Add message</button>
				{error && <span className={s.errorText}>{error}</span>}
			</div>
		</div>
	)
}