import React from "react";
import { UsersPageType } from "Redux/users-reducer";
import { Paginator } from "component/common/paginator/Paginator";
import { User } from "component/Users/User";
import s from "component/Users/users.module.scss";

type UsersPropsType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    users: UsersPageType;
    onPageCount: (page: number) => void;
    toggleFollowingCB: (isFollowing: boolean, id: number) => void;
    followingProgress: Array<number>;
    follow: (id: number) => void;
    unFollow: (id: number) => void;
    portionSize: number;
};

export const Users = (props: UsersPropsType) => {
    const {
        totalUsersCount,
        pageSize,
        currentPage,
        users,
        onPageCount,
        toggleFollowingCB,
        followingProgress,
        follow,
        unFollow,
        portionSize,
    } = props;

    return (
        <>
            <Paginator
                portionSize={portionSize}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageCount={onPageCount}
            />
            <div className={s.flexUsersWrap}>
                {users.users.map((user) => (
                    <User
                        user={user}
                        followingProgress={followingProgress}
                        follow={follow}
                        unFollow={unFollow}
                        key={user.id}
                    />
                ))}
            </div>
        </>
    );
};
