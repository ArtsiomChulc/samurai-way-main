import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './navbar.module.css';
import FriendsContainer from "./Friends/FriendsContainer";


export const Navbar = () => {

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
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <FriendsContainer/>


        </div>
    )
}