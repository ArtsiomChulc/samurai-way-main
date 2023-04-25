import {MessageType} from '../../Redux/store'
import s from './message.module.css'

type MessagePropsType = {
	messages: MessageType[]
}
export const Message = (props: MessagePropsType) => {
	const elMessages = props.messages.map(el => {
		return (
			<span key={el.id}>{el.message}</span>
		)
	})
	return (
		<div className={s.message}>
			{elMessages}
		</div>
	)
}