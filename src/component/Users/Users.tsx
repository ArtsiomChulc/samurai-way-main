import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css';
import userPhoto from '../../assets/images/userPhoto/user-icon.jpg'
import axios from "axios";


class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersCB(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
                console.log(response)
            })
    }

    onPageCount = (page: number) => {
        this.props.setCurrentPageCB(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersCB(response.data.items)
            })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (

            <>
                <div className={s.wrapNumberPage}>
                    {pages.map(page => {
                        return (
                            <span onClick={() => {this.onPageCount(page)}}
                                  className={this.props.currentPage === page
                                      ? s.numberPageBold : s.numberPage}
                            >
                            {page}
                        </span>
                        )
                    })}
                </div>
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
                                    ? <button onClick={() => {
                                        this.props.unFollowCB(user.id)
                                    }
                                    }>
                                        Unfollow
                                    </button>
                                    : <button onClick={() => {
                                        this.props.followCB(user.id)
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
}

export default Users;