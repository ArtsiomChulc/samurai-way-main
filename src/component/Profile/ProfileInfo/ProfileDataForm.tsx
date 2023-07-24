import React from "react";
import { useFormik } from "formik";
import s from "component/Profile/ProfileInfo/profileDataForm.module.scss";
import style from "../../common/styles/btnProfile.module.scss";

type ProfileDataFormPropsType = {};

const ProfileData = (props: ProfileDataFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            aboutMe: "",
            JOB: "",
        },
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
        },
        validate: () => {},
    });
    return (
        <form onSubmit={formik.handleSubmit} className={s.formBlock}>
            <span>Name: </span> <input {...formik.getFieldProps("name")} />
            <br />
            <span>About Me: </span> <input {...formik.getFieldProps("aboutMe")} />
            <br />
            <span>Looking for a JOB: </span> <input {...formik.getFieldProps("JOB")} />
            <br />
            <span className={s.wrapBtn}>
                <button className={style.btnChangeInfo} type={"submit"}>
                    Save info
                </button>
            </span>
        </form>
    );
};

export default ProfileData;
