import React, { ChangeEvent } from "react";
import s from "component/Profile/ProfileInfo/profileInfo.module.css";
import PhotoUserProfile from "assets/images/userPhoto/user-icon.jpg";
import JobTruePhoto from "img/profileUser/profileInfo/job_true.png";
import JobFalsePhoto from "img/profileUser/profileInfo/job_false.jpg";
import Contact from "component/Profile/ProfileInfo/Contact";
import { ProfileType } from "Redux/profile-reducer";

type ProfileDataPropsType = {
    profile: ProfileType | null;
    onPhotoSelected: (e: ChangeEvent<HTMLInputElement>) => void;
    isOwner: boolean;
};

const ProfileData = (props: ProfileDataPropsType) => {
    const jobDescription = props.profile?.lookingForAJobDescription;
    return (
        <div className={s.descWrap}>
            <div className={s.img_name}>
                <div className={s.wrap_img}>
                    <img
                        src={props.profile?.photos.small ? props.profile.photos.small : PhotoUserProfile}
                        alt="Photo User Profile"
                    />
                </div>
                <p>Name: {props.profile?.fullName}</p>
                <span>
                    <label htmlFor="file-upload" className={s.customFileUpload}></label>
                    {props.isOwner && <input id="file-upload" type={"file"} onChange={props.onPhotoSelected} />}
                </span>
            </div>
            <div className={s.lookJob}>
                <span>Looking for a JOB: </span>
                <div className={s.smileJob}>
                    <img src={props.profile?.lookingForAJob ? JobTruePhoto : JobFalsePhoto} alt="Smile" />
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
    );
};

export default ProfileData;
