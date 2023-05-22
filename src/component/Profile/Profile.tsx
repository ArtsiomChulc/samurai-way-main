import React from 'react';
import s from './profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";

type ProfileInfoPropsType = {
	profile: ProfileType | null
}

export const Profile = (props: ProfileInfoPropsType) => {
	return (
		<div className={s.profile}>
			<ProfileInfo profile={props.profile}/>
			<MyPostContainer />

		</div>
	)
}