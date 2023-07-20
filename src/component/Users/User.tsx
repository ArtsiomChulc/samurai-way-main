import s from "./users.module.css";
import btn from "../common/styles/btn.module.css";
import userPhoto from "../../assets/images/userPhoto/user-icon.jpg";
import React from "react";
import { UsersType } from "Redux/users-reducer";
import { NavLink } from "react-router-dom";
import DotPreloader from "../common/dotPreloader/DotPreloader";

type UserPropsType = {
    user: UsersType;
    followingProgress: Array<number>;
    follow: (id: number) => void;
    unFollow: (id: number) => void;
};

export const User = (props: UserPropsType) => {
    const { user, followingProgress, follow, unFollow } = props;

    return (
        <div key={user.id} className={s.userWrap}>
            <div className={s.userPhoto}>
                <NavLink to={"/Profile/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="User photo" />
                </NavLink>
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
            <div className={s.btns}>
                {user.followed ? (
                    <button
                        disabled={followingProgress.some((id) => id === user.id)}
                        className={`${btn.btn} ${s.btn}`}
                        onClick={() => {
                            unFollow(user.id);
                        }}
                    >
                        {followingProgress.some((id) => id === user.id) ? <DotPreloader /> : "Unfollow"}
                    </button>
                ) : (
                    <button
                        disabled={followingProgress.some((id) => id === user.id)}
                        className={`${btn.btn} ${s.btn}`}
                        onClick={() => {
                            follow(user.id);
                        }}
                    >
                        {followingProgress.some((id) => id === user.id) ? <DotPreloader /> : "Follow"}
                    </button>
                )}
            </div>
        </div>
    );
};
