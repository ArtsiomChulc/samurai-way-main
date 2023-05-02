import React from 'react';
import {UsersPropsType} from "./UsersContainer";

const Users = (props: UsersPropsType) => {
    const usersEl = props.users.users.map(user => {
        return (
            <li>
                {user.fullName}-
                {user.status}
            </li>
        )
    })
    return (
        <ul>
            {usersEl}
        </ul>
    );
};

export default Users;