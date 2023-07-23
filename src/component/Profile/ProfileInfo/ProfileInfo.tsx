import React, { ChangeEvent } from "react";
import s from "./profileInfo.module.css";
import { ProfileType } from "Redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";
import PhotoUserProfile from "../../../assets/images/userPhoto/user-icon.jpg";
import JobTruePhoto from "../../../img/profileUser/profileInfo/job_true.png";
import JobFalsePhoto from "../../../img/profileUser/profileInfo/job_false.jpg";
import { ProfileStatusWithHook } from "./ProfileStatusWithHooks";
import Contact from "component/Profile/ProfileInfo/Contact";
import ProfileData from "component/Profile/ProfileInfo/ProfileData";

type ProfileInfoPropsType = {
    profile: ProfileType | null;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
};

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader />;
    }

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;

        if (files && files.length) {
            props.savePhoto(files[0]);
        }
    };

    return (
        <div className={s.profile_info}>
            <div className={s.status}>
                <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
            </div>
            <ProfileData profile={props.profile} onPhotoSelected={onPhotoSelected} isOwner={props.isOwner} />
        </div>
    );
};

export default ProfileInfo;
