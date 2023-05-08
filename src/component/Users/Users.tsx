import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css';
import userPhoto from '../../assets/images/userPhoto/user-icon.jpg'
import axios from "axios";


const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.users.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsersCB(response.data.items)
                console.log(response)
            })
        }
    }



    const usersEl = props.users.users.map(user => {
        const onFollow = () => {
            props.followCB(user.id)
        }
        const onUnFollow = () => {
            props.unFollowCB(user.id)
        }
        return (
            <div key={user.id} className={s.userWrap}>
                <div className={s.userPhoto}>
                    <img src={ user.photos.small != null
                        ? user.photos.small
                        : userPhoto
                    } alt="User photo"/>
                </div>
                <div className={s.titleInfo}>
                    <div className={s.info}>
                        <p>{user.name}</p>
                        <p>{user.status}</p>
                    </div>
                    <div className={s.location}>
                        <p>{"user.location.country"}</p>
                        <p>{"user.location.city"}</p>
                    </div>
                </div>
                <div className={s.btn}>
                    {user.followed
                        ? <button onClick={onUnFollow}>Unfollow</button>
                        : <button onClick={onFollow}>Follow</button>
                    }

                </div>
            </div>
        )
    })
    return (
        <>
            {usersEl}
            <div className={s.more_btn}>
                <button onClick={getUsers}>Add more users</button>
            </div>
        </>
    );
};

export default Users;