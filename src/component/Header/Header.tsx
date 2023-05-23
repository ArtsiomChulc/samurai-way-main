import React from "react";
import s from './header.module.css'
import {NavLink} from "react-router-dom";
import LogIn from "../common/login/LogIn";

type HeaderPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}

function Header(props: HeaderPropsType) {
    return (
        <div className={s.header}>

            <span className={s.logo}>
                <img src="https://thumbs.dreamstime.com/b/flame-vector-eps-flame-vector-eps-146467297.jpg" alt="logo"/>
            </span>
            <p className={s.title_header}>Social network</p>

            <div className={s.login_block}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>LogIn</NavLink>
                }

            </div>

        </div>
    );
}

export default Header;