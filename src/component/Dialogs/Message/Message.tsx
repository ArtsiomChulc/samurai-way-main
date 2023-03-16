import { DialogsPageType } from '../../Redux/State'
import s from './message.module.css'


export const Message = (props: DialogsPageType) => {
	const elMessages = props.messages.map(el => {
		return (
			<span>{el.message}</span>
		)
	})
	return (
		<div className={s.message}>
			{elMessages}
		</div>
	)
}