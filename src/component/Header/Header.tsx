import React from "react";
import s from "component/Header/header.module.scss";
import { NavLink } from "react-router-dom";
import { HeaderPropsType } from "./HeaderContainer";

function Header(props: HeaderPropsType) {
    return (
        <div className={s.header}>
            <span className={s.logo}>
                <img src="https://thumbs.dreamstime.com/b/flame-vector-eps-flame-vector-eps-146467297.jpg" alt="logo" />
            </span>
            <p className={s.title_header}>Social network</p>

            <div className={s.login_block}>
                {props.isAuth ? (
                    <div className={s.authBlock}>
                        <span className={s.loginName}>{props.login}</span>
                        <span onClick={props.logOutTC} className={s.logOut}>
                            LogOut
                        </span>
                    </div>
                ) : (
                    <NavLink to={"/login"}>LogIn</NavLink>
                )}
            </div>
        </div>
    );
}

export default Header;
