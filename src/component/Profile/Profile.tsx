import React from 'react';
import s from './profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";
import {ProfileStatus} from "./ProfileInfo/ProfileStatus";
// import {Redirect} from "react-router-dom";

type ProfileInfoPropsType = {
	profile: ProfileType | null
	status: string
	updateStatus: (status: string) => void
	// isAuth: boolean
}

export const Profile = (props: ProfileInfoPropsType) => {

	//REDIRECT
	// if(!props.isAuth) return <Redirect to={'login'}/>

	return (
		<div className={s.profile}>
			<ProfileInfo
				profile={props.profile}
			/>
			<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
			<MyPostContainer />

		</div>
	)
}

