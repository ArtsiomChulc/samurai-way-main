import React, {ChangeEvent} from 'react'
import {DialogType, MessageType} from '../Redux/State'
import { DialogInfo } from './DialogInfo/DialogInfo'
import s from './dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPropsType = {
	dialogs: DialogType[]
	messages: MessageType[]
	addMessage: () => void
	updateNewMessageText: (text: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
	const newTextElement = React.createRef<HTMLTextAreaElement>()

	const addMessage = () => {
		props.addMessage()
	}

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let textMessage = e.currentTarget.value
		props.updateNewMessageText(textMessage)
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
				<textarea ref={newTextElement} onChange={onChangeHandler}/>
				<button onClick={addMessage} className={s.btn}>Add message</button>
			</div>
		</>

	)
}