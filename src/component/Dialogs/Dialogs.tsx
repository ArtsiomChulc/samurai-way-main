import React from 'react'
import { DialogsPageType } from '../Redux/State'
import { DialogInfo } from './DialogInfo/DialogInfo'
import s from './dialogs.module.css'
import { Message } from './Message/Message'


export const Dialogs = (props: DialogsPageType) => {

	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_names}>

				<DialogInfo dialogs={props.dialogs} messages={[]} />

			</div>
			<div className={s.messages}>

				<Message messages={props.messages} dialogs={[]} />

			</div>
		</div>
	)
}