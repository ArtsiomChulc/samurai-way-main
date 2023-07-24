import React, { ChangeEvent, useState } from "react";
import s from "component/Profile/ProfileInfo/profileInfo.module.scss";
import { ProfileType } from "Redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";
import PhotoUserProfile from "../../../assets/images/userPhoto/user-icon.jpg";
import { ProfileStatusWithHook } from "./ProfileStatusWithHooks";
import ProfileData from "component/Profile/ProfileInfo/ProfileData";
import ProfileDataForm, { FormikResType } from "component/Profile/ProfileInfo/ProfileDataForm";

type ProfileInfoPropsType = {
    profile: ProfileType | null;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    saveProfile: (x: FormikResType) => void;
};

const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editeMode, setEditeMode] = useState(false);

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
            <div className={s.img_name}>
                <div className={s.wrap_img}>
                    <img
                        src={props.profile?.photos.small ? props.profile.photos.small : PhotoUserProfile}
                        alt="Photo User Profile"
                    />
                </div>
                <span>
                    <label htmlFor="file-upload" className={s.customFileUpload}></label>
                    {props.isOwner && <input id="file-upload" type={"file"} onChange={onPhotoSelected} />}
                </span>
            </div>
            {!editeMode ? (
                <ProfileData
                    profile={props.profile}
                    onPhotoSelected={onPhotoSelected}
                    isOwner={props.isOwner}
                    setEditeMode={setEditeMode}
                />
            ) : (
                <ProfileDataForm saveProfile={props.saveProfile} setEditeMode={setEditeMode} />
            )}
        </div>
    );
};

export default ProfileInfo;
