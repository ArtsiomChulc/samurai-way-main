import React from 'react';
import s from './navbar.module.css';



export const Navbar = () => {
	return (
		<div className={s.navbar}>
			<div className={s.item}>
				<a href='/Profile'>Profile</a>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<a href='/Dialogs'>Messages</a>
			</div>
			<div className={s.item}>
				<a href='/news'>News</a>
			</div>
			<div className={s.item}>
				<a href='/music'>Music</a>
			</div>
			<div className={s.item}>
				<a href='/settings'>Settings</a>
			</div>
		</div>
	)
}