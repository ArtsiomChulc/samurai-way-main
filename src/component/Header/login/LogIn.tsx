import React from 'react';
import s from './LogIn.module.css';

const LogIn = () => {
    return (
        <div className={s.container}>
            <div className={s.brand_logo}></div>
            <div className={s.brand_title}>MySN</div>
            <div className={s.inputs}>
                <label>EMAIL</label>
                <input className={s.input} type="email" placeholder="example@test.com"/>
                <label>PASSWORD</label>
                <input className={s.input} type="password" placeholder="Min 6 charaters long"/>
                <button className={s.button} type="submit">LOGIN</button>
            </div>
        </div>
    );
};

export default LogIn;