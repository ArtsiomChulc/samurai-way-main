import React from 'react';
import s from './profileInfo.module.css';


export const ProfileInfo = () => {
	return (
		<div className={s.profile_info}>
			<div className={s.avatar}>
				<img src='https://img3.akspic.ru/previews/0/2/0/2/7/172020/172020-sntis-gora-priroda-peyzash-sammit-x750.jpg' alt="dffdd" />
			</div>
			<div className={s.desc}>
				Description + avatar
			</div>
		</div>
	)
}