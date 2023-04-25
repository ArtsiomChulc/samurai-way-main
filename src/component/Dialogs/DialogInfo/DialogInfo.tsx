import { NavLink } from 'react-router-dom';
import {DialogType} from '../../Redux/store';
import s from './dialogInfo.module.css';

type DialogInfoPropsType = {
	dialogs: DialogType[]
}

export const DialogInfo = (props: DialogInfoPropsType) => {

	const element = props.dialogs.map(el => {
		return (
			<NavLink key={el.id} to={"/Dialogs/" + el.id}>{el.name}</NavLink>
		)
	})
	return (
		<div className={s.dialog_name}>

			{element}

		</div>
	)
}