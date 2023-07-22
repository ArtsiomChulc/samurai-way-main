import React, { lazy, Suspense } from "react";
import s from "./profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
// import MyPostContainer from "./MyPost/MyPostContainer";
import { ProfileType } from "Redux/profile-reducer";
import Preloader from "component/common/preloader/Preloader";
const MyPostContainer = lazy(() => import("./MyPost/MyPostContainer"));

type ProfileInfoPropsType = {
    profile: ProfileType | null;
    status: string;
    updateStatus: (status: string) => void;
    isAuth: boolean;
};

export const Profile = (props: ProfileInfoPropsType) => {
    // REDIRECT
    // if(!props.isAuth) return <Redirect to={'login'}/>

    return (
        <div className={s.profile}>
            <Suspense fallback={<Preloader />}>
                <ProfileInfo status={props.status} updateStatus={props.updateStatus} profile={props.profile} />
            </Suspense>
            <MyPostContainer />
        </div>
    );
};
