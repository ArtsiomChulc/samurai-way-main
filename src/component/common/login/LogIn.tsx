import React from "react";
import s from "./LogIn.module.css";
import { Field, FormProps, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../formControls/FormControl";
import { mailError, required } from "utils/validators/validatorsForReduxForm";
import { connect } from "react-redux";
import { loginTC } from "Redux/auth-reducer";
import { AppRootStateType } from "Redux/redux-store";
import { Redirect } from "react-router-dom";

type LogInPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void;
    isAuth: boolean;
    captchaURL: string | null;
};

type MapStateToPropsType = {
    isAuth: boolean;
    captchaURL: string | null;
};

type LoginFormType = {
    login: string;
    password: string;
    rememberMe: boolean;
    captcha: string | null;
};

type CaptchaType = {
    captchaURL: string | null;
};

export const LoginForm: React.FC<InjectedFormProps<LoginFormType, CaptchaType> & CaptchaType> = ({
    handleSubmit,
    error,
    captchaURL,
}) => {
    return (
        <form onSubmit={handleSubmit} className={s.inputs}>
            <label>EMAIL</label>
            <Field
                className={s.input}
                type="text"
                placeholder="example@test.com"
                name={"login"}
                component={Input}
                validate={[required, mailError]}
            />
            <label>PASSWORD</label>
            <Field
                className={s.input}
                type="password"
                placeholder="Min 6 characters long"
                name={"password"}
                component={Input}
                validate={[required]}
            />
            <div className={s.checkWrap}>
                <Field className={s.checkbox} type="checkbox" name={"rememberMe"} component={Input} />
                <span>remember me</span>
            </div>
            {error && (
                <div className={s.errorWrapper}>
                    <span className={s.errorForm}>{error}</span>
                </div>
            )}
            {captchaURL && <img className={s.captcha} src={captchaURL} alt="captcha" />}
            {captchaURL && (
                <Field
                    className={s.input}
                    type="text"
                    placeholder="Enter this captcha code!!!"
                    name={"captcha"}
                    component={Input}
                    validate={[required]}
                />
            )}
            <button className={s.button} type="submit">
                LOGIN
            </button>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormType, CaptchaType>({
    form: "login",
})(LoginForm);

const LogIn = (props: LogInPropsType) => {
    const onSubmit = (formData: LoginFormType) => {
        props.loginTC(formData.login, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />;
    }
    return (
        <div className={s.container}>
            <div className={s.brand_logo}></div>
            <h1 className={s.brand_title}>MySN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
        </div>
    );
};

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL,
    };
};

export default connect(mapStateToProps, {
    loginTC,
})(LogIn);
