import {ActionsTypes, MessageType} from '../../Redux/store'
import React from "react";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import {Message} from "./Message";

type MessagePropsType = {
	messages: MessageType[]
	dispatch: (action: ActionsTypes) => void
	messageInInput: string
}
export const MessageContainer = (props: MessagePropsType) => {

	const addMessageCB = (el: string) => {
		props.dispatch(AddMessageAC(el))
	}

	const onChangeHandlerCB = (text: string) => {

		props.dispatch(UpdateNewMessageTextAC(text))
	}


	return <Message
		messages={props.messages}
		addMessageCB={addMessageCB}
		onChangeHandlerCB={onChangeHandlerCB}
		messageInInput={props.messageInInput}
	/>
}