import React from 'react';
import s from './LogIn.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const LogIn = () => {

    const onSubmit = (formData: LoginFormType) => {
        console.log(formData)
    }

    return (
        <div className={s.container}>
            <div className={s.brand_logo}></div>
            <h1 className={s.brand_title}>MySN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default LogIn;

type LoginFormType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<LoginFormType>) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.inputs}>
            <label>EMAIL</label>
            <Field className={s.input} type="text" placeholder="example@test.com" name={'login'} component={'input'}/>
            <label>PASSWORD</label>
            <Field className={s.input} type="password" placeholder="Min 6 charaters long" name={'password'} component={'input'}/>
            <div className={s.checkWrap}>
                <Field className={s.checkbox} type="checkbox" name={'rememberMe'} component={'input'}/> <span>remember me</span>
            </div>

            <button className={s.button} type="submit">LOGIN</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormType>({
    form: 'login'
})(LoginForm)