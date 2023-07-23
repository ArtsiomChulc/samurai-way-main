import React, { ChangeEvent } from "react";
import s from "./profileInfo.module.css";
import { ProfileType } from "Redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";
import PhotoUserProfile from "../../../assets/images/userPhoto/user-icon.jpg";
import JobTruePhoto from "../../../img/profileUser/profileInfo/job_true.png";
import JobFalsePhoto from "../../../img/profileUser/profileInfo/job_false.jpg";
import { ProfileStatusWithHook } from "./ProfileStatusWithHooks";
import Contact from "component/Profile/ProfileInfo/Contact";

type ProfileInfoPropsType = {
    profile: ProfileType | null;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
};

const ProfileInfo = (props: ProfileInfoPropsType) => {
    const jobDescription = props.profile?.lookingForAJobDescription;

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
                    <div className={s.jobDesc}>{jobDescription ? jobDescription : "No job description"}</div>
                </div>
                <div className={s.wrapContacts}>
                    <ul>
                        {Object.keys(props.profile.contacts).map((key) => {
                            // @ts-ignore
                            return <Contact key={key} contactTitle={key} contactValue={props.profile?.contacts[key]} />;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
