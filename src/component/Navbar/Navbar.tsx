import React from 'react';
import s from './navbar.module.css';



export const Navbar = () => {
	return (
		<div className={s.navbar}>
			<div className={s.item}>
				<a href='/Profile'>Profile</a>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<a href='/Message'>Messages</a>
			</div>
			<div className={s.item}>
				<a>News</a>
			</div>
			<div className={s.item}>
				<a>Music</a>
			</div>
			<div className={s.item}>
				<a>Settings</a>
			</div>
		</div>
	)
}