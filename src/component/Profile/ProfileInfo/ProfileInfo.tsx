import React, { ChangeEvent } from "react";
import s from "./profileInfo.module.css";
import { ProfileType } from "Redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";
import PhotoUserProfile from "../../../assets/images/userPhoto/user-icon.jpg";
import JobTruePhoto from "../../../img/profileUser/profileInfo/job_true.png";
import JobFalsePhoto from "../../../img/profileUser/profileInfo/job_false.jpg";
import { ProfileStatusWithHook } from "./ProfileStatusWithHooks";

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
                {/*<img*/}
                {/*    src='https://img3.akspic.ru/previews/0/2/0/2/7/172020/172020-sntis-gora-priroda-peyzash-sammit-x750.jpg'*/}
                {/*    alt="dffdd"/>*/}
            </div>
            <div className={s.descWrap}>
                <div className={s.img_name}>
                    <div className={s.wrap_img}>
                        <img
                            src={props.profile.photos.small ? props.profile.photos.small : PhotoUserProfile}
                            alt="Photo User Profile"
                        />
                    </div>
                    <p>Name: {props.profile.fullName}</p>
                    <span>
                        <label htmlFor="file-upload" className={s.customFileUpload}></label>
                        {props.isOwner && <input id="file-upload" type={"file"} onChange={onPhotoSelected} />}
                    </span>
                </div>
                <div className={s.lookJob}>
                    <span>Looking for a JOB: </span>
                    <div className={s.smileJob}>
                        <img src={props.profile.lookingForAJob ? JobTruePhoto : JobFalsePhoto} alt="Smile" />
                    </div>
                </div>
                <div className={s.wrapContacts}>
                    <ul>
                        <li>
                            Facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : "Not Yet"}
                        </li>
                        <li>Website: {props.profile.contacts.website ? props.profile.contacts.website : "Not Yet"}</li>
                        <li>VKontakte: {props.profile.contacts.vk ? props.profile.contacts.vk : "Not Yet"}</li>
                        <li>Twitter: {props.profile.contacts.twitter ? props.profile.contacts.twitter : "Not Yet"}</li>
                        <li>
                            Instagram: {props.profile.contacts.instagram ? props.profile.contacts.instagram : "Not Yet"}
                        </li>
                        <li>YouTube: {props.profile.contacts.youtube ? props.profile.contacts.youtube : "Not Yet"}</li>
                        <li>GitHub: {props.profile.contacts.github ? props.profile.contacts.github : "Not Yet"}</li>
                        <li>
                            MainLink: {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : "Not Yet"}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
