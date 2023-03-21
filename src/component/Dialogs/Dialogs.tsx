import React from 'react'
import { DialogType, MessageType } from '../Redux/State'
import { DialogInfo } from './DialogInfo/DialogInfo'
import s from './dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPrpsType = {
	dialogs: DialogType[]
	messages: MessageType[]
	addPost: (value: string) => void
}

export const Dialogs = (props: DialogsPrpsType) => {
	const newTextElement = React.createRef<HTMLTextAreaElement>()

	const addMessage = () => {
		props.addPost(newTextElement.current ? newTextElement.current.value : '---')
	}

	return (
		<>
			<div className={s.dialogs}>
				<div className={s.dialogs_names}>

					<DialogInfo dialogs={props.dialogs} messages={[]} />

				</div>
				<div className={s.messages}>

					<Message messages={props.messages} dialogs={[]} />

				</div>
			</div>
			<div className={s.wrapAddMessage}>
				<textarea ref={newTextElement}></textarea>
				<button onClick={addMessage} className={s.btn}>Add message</button>
			</div>
		</>

	)
}