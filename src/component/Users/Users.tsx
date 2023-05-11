import s from "./users.module.css";
import userPhoto from "../../assets/images/userPhoto/user-icon.jpg";
import React from "react";
import {UsersPageType} from "../Redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersPageType
    onPageCount: (page: number) => void
    unFollowCB: (userID: number) => void
    followCB: (userID: number) => void
}


export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            <div className={s.wrapNumberPage}>
                {pages.map(page => {
                    return (
                        <span onClick={() => {
                            props.onPageCount(page)
                        }}
                              className={props.currentPage === page
                                  ? s.numberPageBold : s.numberPage}
                        >
                            {page}
                        </span>
                    )
                })}
            </div>
            {
                props.users.users.map(user => <div key={user.id} className={s.userWrap}>
                        <div className={s.userPhoto}>
                            <NavLink to={'/Profile/' + user.id}>
                                <img src={user.photos.small != null
                                    ? user.photos.small
                                    : userPhoto
                                } alt="User photo"/>
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
                        <div className={s.btn}>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unFollowCB(user.id)
                                }
                                }>
                                    Unfollow
                                </button>
                                : <button onClick={() => {
                                    props.followCB(user.id)
                                }
                                }>
                                    Follow
                                </button>
                            }

                        </div>
                    </div>
                )}
            {/*<div className={s.more_btn}>*/}
            {/*    <button>Add more users</button>*/}
            {/*</div>*/}
        </>
    )
}

