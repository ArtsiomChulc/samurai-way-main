import React, { lazy, Suspense, useState } from "react";
import s from "./profile.module.css";
// import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import { ProfileType } from "Redux/profile-reducer";
import Preloader from "component/common/preloader/Preloader";

const ProfileInfo = lazy(() => import("./ProfileInfo/ProfileInfo"));

type ProfileInfoPropsType = {
    profile: ProfileType | null;
    status: string;
    updateStatus: (status: string) => void;
    isAuth: boolean;
    isOwner: boolean;
    savePhoto: (file: File) => void;
};

export const Profile = (props: ProfileInfoPropsType) => {
    // REDIRECT
    // if(!props.isAuth) return <Redirect to={'login'}/>

    return (
        <div className={s.profile}>
            <Suspense fallback={<Preloader />}>
                <ProfileInfo
                    isOwner={props.isOwner}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    profile={props.profile}
                    savePhoto={props.savePhoto}
                />
            </Suspense>
            <MyPostContainer />
        </div>
    );
};
