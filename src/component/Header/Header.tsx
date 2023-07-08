import React from "react";
import s from './header.module.css'
import {NavLink} from "react-router-dom";
import btn from '../common/styles/btn.module.css';
import {HeaderPropsType} from "./HeaderContainer";

// type HeaderPropsType = {
//     id: number | null
//     login: string | null
//     email: string | null
//     isFetching: boolean
//     isAuth: boolean
// }

function Header(props: HeaderPropsType) {
    return (
        <div className={s.header}>

            <span className={s.logo}>
                <img src="https://thumbs.dreamstime.com/b/flame-vector-eps-flame-vector-eps-146467297.jpg" alt="logo"/>
            </span>
            <p className={s.title_header}>Social network</p>

            <div className={s.login_block}>
                {props.isAuth
                    ? <div className={s.authBlock}>
                        <span>{props.login}</span>
                        <button onClick={props.logOutTC} className={btn.btn}>LogOut</button>
                    </div>

                    : <NavLink to={'/login'}>LogIn</NavLink>
                }

            </div>

        </div>
    );
}

export default Header;