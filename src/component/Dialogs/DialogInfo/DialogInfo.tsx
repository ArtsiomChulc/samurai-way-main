import { NavLink } from 'react-router-dom';
import s from './dialogInfo.module.css';
import {DialogType} from "../../Redux/dialogs-reducer";

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