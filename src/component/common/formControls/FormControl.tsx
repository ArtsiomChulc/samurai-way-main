import React, {PropsWithChildren} from 'react';
import s from './formControl.module.css'
import {WrappedFieldProps} from "redux-form";

const FormControl = ({meta, children}: PropsWithChildren<WrappedFieldProps>) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: PropsWithChildren<WrappedFieldProps>) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: PropsWithChildren<WrappedFieldProps>) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}