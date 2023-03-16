import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarFriendsType } from '../Redux/State';
import { Friends } from './Friends/Friends';
import s from './navbar.module.css';



export const Navbar = (props: NavbarFriendsType) => {

	return (
		<div className={s.navbar}>
			<div className={s.item}>
				<NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/news' activeClassName={s.active}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music' activeClassName={s.active}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
			</div>

			<Friends friends={props.friends} />

		</div>
	)
}