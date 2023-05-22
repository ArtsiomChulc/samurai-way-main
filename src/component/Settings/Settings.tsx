import React from 'react';
import s from './settings.module.css';
import LogIn from "../Header/login/LogIn";


export const Settings = () => {
	return (
		<div className={s.settings}>
			<LogIn/>
		</div>
	)
}