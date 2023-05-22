import s from "./users.module.css";
import btn from "../common/styles/btn.module.css";
import userPhoto from "../../assets/images/userPhoto/user-icon.jpg";
import React from "react";
import {UsersPageType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import DotPreloader from "../common/dotPreloader/DotPreloader";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersPageType
    onPageCount: (page: number) => void
    toggleFollowingCB: (isFollowing: boolean, id: number) => void
    followingProgress: Array<number>
    follow: (id: number) => void
    unFollow: (id: number) => void
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
                        <div className={s.btns}>
                            {user.followed
                                ? <button disabled={props.followingProgress.some(id => id === user.id)}
                                          className={`${btn.btn} ${s.btn}`} onClick={() => {
                                    props.unFollow(user.id)
                                    // props.toggleFollowingCB(true, user.id)
                                    // usersAPI.deleteFollowStatus(user.id).then(data => {
                                    //     if (data.resultCode === 0) {
                                    //         props.unFollowCB(user.id)
                                    //     }
                                    //     props.toggleFollowingCB(false, user.id)
                                    // })
                                }
                                }>
                                    {props.followingProgress.some(id => id === user.id) ? <DotPreloader/> : 'Unfollow'}
                                </button>
                                : <button disabled={props.followingProgress.some(id => id === user.id)}
                                          className={`${btn.btn} ${s.btn}`} onClick={() => {
                                    props.follow(user.id)
                                    // props.toggleFollowingCB(true, user.id)
                                    // usersAPI.postFollowStatus(user.id).then(data => {
                                    //     if (data.resultCode === 0) {
                                    //         props.followCB(user.id)
                                    //     }
                                    //     props.toggleFollowingCB(false, user.id)
                                    // })
                                }
                                }>
                                    {props.followingProgress.some(id => id === user.id) ? <DotPreloader/> : 'Follow'}

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

