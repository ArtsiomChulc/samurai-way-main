import React, { ChangeEvent } from "react";
import s from "component/Profile/ProfileInfo/profileInfo.module.scss";
import style from "../../common/styles/btnProfile.module.scss";
import Contact from "component/Profile/ProfileInfo/Contact";
import { ProfileType } from "Redux/profile-reducer";

type ProfileDataPropsType = {
    profile: ProfileType | null;
    onPhotoSelected: (e: ChangeEvent<HTMLInputElement>) => void;
    isOwner: boolean;
    setEditeMode: (x: boolean) => void;
};

const ProfileData = (props: ProfileDataPropsType) => {
    const jobDescription = props.profile?.lookingForAJobDescription;
    const LookingForAJob = props.profile?.lookingForAJob;
    const contacts = props.profile?.contacts ? props.profile.contacts : "";

    const onChangeInfo = () => {
        props.setEditeMode(true);
    };

    return (
        <div className={s.descWrap}>
            <div className={s.myInfo}>
                <span>
                    <b>Name</b>: {props.profile?.fullName}
                </span>
                <span>
                    <b>About Me</b>: {props.profile?.aboutMe}
                </span>
                <span>
                    <b>Looking for a Job description</b>: {jobDescription}
                </span>
                <span>
                    <b>Looking for a Job</b>: {LookingForAJob ? "Yes" : "No"}
                </span>
            </div>
            {props.isOwner && (
                <span>
                    <button className={style.btnChangeInfo} onClick={onChangeInfo}>
                        change information
                    </button>
                </span>
            )}
            <div className={s.wrapContacts}>
                <ul>
                    {Object.keys(contacts).map((key) => {
                        // @ts-ignore
                        return <Contact key={key} contactTitle={key} contactValue={props.profile?.contacts[key]} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ProfileData;
