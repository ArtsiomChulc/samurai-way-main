import React from 'react';
import { Description } from './Description/Description';
import s from './profile.module.css';
import { Main } from './Main/Main';
import { MyPost } from './MyPost/MyPost';

export const Profile = () => {
	return (
		<div className={s.profile}>
			<Main />
			<Description />
			<MyPost />
		</div>
	)
}