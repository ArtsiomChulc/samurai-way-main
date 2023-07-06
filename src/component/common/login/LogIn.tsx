import React from 'react';
import s from './LogIn.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../formControls/FormControl";
import {mailError, required} from "../../../utils/validators/validatorsForReduxForm";
import {connect} from "react-redux";
import {loginTC} from "../../../Redux/auth-reducer";

type LogInPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}

const LogIn = (props: LogInPropsType) => {

    const onSubmit = (formData: LoginFormType) => {
        props.loginTC(formData.login, formData.password, formData.rememberMe)
    }

    return (
        <div className={s.container}>
            <div className={s.brand_logo}></div>
            <h1 className={s.brand_title}>MySN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(null, {
    loginTC
})(LogIn);

type LoginFormType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<LoginFormType>) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.inputs}>
            <label>EMAIL</label>
            <Field className={s.input}
                   type="text"
                   placeholder="example@test.com"
                   name={'login'}
                   component={Input}
                   validate={[required, mailError]}
            />
            <label>PASSWORD</label>
            <Field className={s.input}
                   type="password"
                   placeholder="Min 6 characters long"
                   name={'password'}
                   component={Input}
                   validate={[required]}
            />
            <div className={s.checkWrap}>
                <Field className={s.checkbox} type="checkbox" name={'rememberMe'} component={Input}/> <span>remember me</span>
            </div>

            <button className={s.button} type="submit">LOGIN</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormType>({
    form: 'login'
})(LoginForm)