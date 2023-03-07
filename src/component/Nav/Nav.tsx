import React from 'react';
import s from './nav.module.css';



export const Nav = () => {
	return (
		<div className={s.nav}>
			<a>Profile</a>
			<a>Messages</a>
			<a>News</a>
			<a>Music</a>
			<a>Settings</a>
		</div>
	)
}