import React, { ChangeEvent } from "react";
import s from "component/Profile/ProfileInfo/profileInfo.module.scss";
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
    const contacts = props.profile?.contacts ? props.profile.contacts : "";

    const onChangeInfo = () => {
        props.setEditeMode(true);
    };

    return (
        <div className={s.descWrap}>
            <div className={s.myInfo}>
                <span>Name: {props.profile?.fullName}</span>
                <span>About Me: {props.profile?.aboutMe}</span>
                <span>Looking for a JOB: {jobDescription}</span>
            </div>
            {props.isOwner && (
                <span>
                    <button className={s.btnChangeInfo} onClick={onChangeInfo}>
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
