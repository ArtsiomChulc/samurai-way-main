import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import {ActionTypes, AddMessageAC, DialogType, MessageType, UpdateNewMessageTextAC} from '../Redux/store'
import { DialogInfo } from './DialogInfo/DialogInfo'
import s from './dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPropsType = {
	messageInInput: string
	dialogs: DialogType[]
	messages: MessageType[]
	dispatch: (action: ActionTypes) => void
	// addMessage: (messageText: string) => void
	// updateNewMessageText: (text: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

	const [error, setError] = useState<string | null>(null)
	const newTextElement = React.createRef<HTMLTextAreaElement>()

	const addMessage = () => {
		let el = newTextElement.current ? newTextElement.current.value : '---'
		if (newTextElement.current?.value.trim() !== '') {
			setError('')
		} else {
			setError('Введите текст!!!')
		}
		props.dispatch(AddMessageAC(el))
	}

	const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter") {
			addMessage()
		}
	}

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let textMessage = e.currentTarget.value
		props.dispatch(UpdateNewMessageTextAC(textMessage))
	}

	return (
		<>
			<div className={s.dialogs}>
				<div className={s.dialogs_names}>

					<DialogInfo dialogs={props.dialogs} />

				</div>
				<div className={s.messages}>

					<Message messages={props.messages}/>

				</div>
			</div>
			<div className={s.wrapAddMessage}>
				<textarea value={props.messageInInput}
						  onKeyDown={onKeyDownHandler}
						  ref={newTextElement}
						  onChange={onChangeHandler}
						  placeholder={"Enter your message"}
				/>
				<button onClick={addMessage} className={s.btn}>Add message</button>
				{error && <span className={s.errorText}>{error}</span>}
			</div>
		</>

	)
}