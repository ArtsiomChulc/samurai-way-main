import React from "react";
import s from './header.module.css'


function Header() {
    return (
        <div className={s.header}>

            <span className={s.logo}>
                <img src="https://thumbs.dreamstime.com/b/flame-vector-eps-flame-vector-eps-146467297.jpg" alt="logo" />
            </span>
            <p className={s.title_header}>Одногруппники</p>

        </div>
    );
}

export default Header;