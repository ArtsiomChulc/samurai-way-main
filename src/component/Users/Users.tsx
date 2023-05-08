import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css';
import userPhoto from '../../assets/images/userPhoto/user-icon.jpg'
import axios from "axios";


class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsersCB(response.data.items)
                console.log(response)
            })
    }


    render() {
        return (

            <>
                {
                    this.props.users.users.map(user => <div key={user.id} className={s.userWrap}>
                            <div className={s.userPhoto}>
                                <img src={user.photos.small != null
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
                                    ? <button onClick={() =>
                                    {this.props.unFollowCB(user.id)}
                                    }>
                                        Unfollow
                                </button>
                                    : <button onClick={() =>
                                    {this.props.followCB(user.id)}
                                    }>
                                        Follow
                                    </button>
                                }

                            </div>
                        </div>
                    )}
                <div className={s.more_btn}>
                    <button>Add more users</button>
                </div>
            </>
        )
    }
}

export default Users;