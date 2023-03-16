import { NavLink } from 'react-router-dom';
import { DialogsPageType } from '../../Redux/State';
import s from './dialogInfo.module.css';


export const DialogInfo = (props: DialogsPageType) => {

	const element = props.dialogs.map(el => {
		return (
			<NavLink to={"/Dialogs/" + el.id}>{el.name}</NavLink>
		)
	})
	return (
		<div className={s.dialog_name}>

			{element}

		</div>
	)
}