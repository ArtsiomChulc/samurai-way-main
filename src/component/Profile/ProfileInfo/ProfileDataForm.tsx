import React from "react";
import { useFormik } from "formik";
import s from "component/Profile/ProfileInfo/profileDataForm.module.scss";
import style from "../../common/styles/btnProfile.module.scss";

type ProfileDataFormPropsType = {
    saveProfile: (x: FormikResType) => void;
    setEditeMode: (x: boolean) => void;
};

export type FormikResType = {
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    aboutMe: string | null;
};

const ProfileData = (props: ProfileDataFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            lookingForAJob: false,
            lookingForAJobDescription: "",
            aboutMe: "",
        },
        onSubmit: (values: FormikResType) => {
            props.saveProfile(values);
            formik.resetForm();
            props.setEditeMode(false);
        },
        validate: () => {},
    });
    return (
        <form onSubmit={formik.handleSubmit} className={s.formBlock}>
            <span>Name: </span> <input {...formik.getFieldProps("fullName")} />
            <br />
            <span>About Me: </span> <input {...formik.getFieldProps("aboutMe")} />
            <br />
            <span>looking for a Job Description: </span>{" "}
            <input {...formik.getFieldProps("lookingForAJobDescription")} />
            <br />
            <span className={s.wrapCheckBox}>
                <span>Looking for a JOB: </span> <input type={"checkbox"} {...formik.getFieldProps("lookingForAJob")} />
            </span>
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
