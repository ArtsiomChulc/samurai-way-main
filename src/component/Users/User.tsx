import s from "component/Users/users.module.scss";
import btn from "../common/styles/btn.module.css";
import userPhoto from "../../assets/images/userPhoto/user-icon.jpg";
import React from "react";
import { UsersType } from "Redux/users-reducer";
import { NavLink } from "react-router-dom";
import DotPreloader from "../common/dotPreloader/DotPreloader";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

type UserPropsType = {
    user: UsersType;
    followingProgress: Array<number>;
    follow: (id: number) => void;
    unFollow: (id: number) => void;
};

export const User = (props: UserPropsType) => {
    const { user, followingProgress, follow, unFollow } = props;

    return (
        // <div key={user.id} className={s.userWrap}>
        <div className={s.userCard}>
            {/*<div className={s.userPhoto}>*/}
            {/*    <NavLink to={"/Profile/" + user.id}>*/}
            {/*        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="User photo" />*/}
            {/*    </NavLink>*/}
            {/*</div>*/}
            {/*<div className={s.titleInfo}>*/}
            {/*    <div className={s.info}>*/}
            {/*        <p>{user.name}</p>*/}
            {/*        <p>{user.status}</p>*/}
            {/*    </div>*/}
            {/*    <div className={s.location}>*/}
            {/*        <p>{"user.location.country"}</p>*/}
            {/*        <p>{"user.location.city"}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={s.btns}>*/}
            {/*    {user.followed ? (*/}
            {/*        <button*/}
            {/*            disabled={followingProgress.some((id) => id === user.id)}*/}
            {/*            className={`${btn.btn} ${s.btn}`}*/}
            {/*            onClick={() => {*/}
            {/*                unFollow(user.id);*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            {followingProgress.some((id) => id === user.id) ? <DotPreloader /> : "Unfollow"}*/}
            {/*        </button>*/}
            {/*    ) : (*/}
            {/*        <button*/}
            {/*            disabled={followingProgress.some((id) => id === user.id)}*/}
            {/*            className={`${btn.btn} ${s.btn}`}*/}
            {/*            onClick={() => {*/}
            {/*                follow(user.id);*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            {followingProgress.some((id) => id === user.id) ? <DotPreloader /> : "Follow"}*/}
            {/*        </button>*/}
            {/*    )}*/}
            {/*</div>*/}
            <Card className={s.userWrap}>
                <NavLink to={"/Profile/" + user.id}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image={user.photos.small != null ? user.photos.small : userPhoto}
                        title={user.name}
                    />
                </NavLink>
                <CardContent className={s.cardContent}>
                    <Typography gutterBottom variant="h5" component="div" className={s.userName}>
                        {user.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <span className={s.textStatus}>Status: </span>
                        {user.status ? user.status : "the user has not yet been determined"}
                    </Typography>
                </CardContent>
                <CardActions className={s.wrapBtn}>
                    {user.followed ? (
                        <Button
                            size="small"
                            disabled={followingProgress.some((id) => id === user.id)}
                            onClick={() => {
                                unFollow(user.id);
                            }}
                        >
                            Unfollow
                        </Button>
                    ) : (
                        <Button
                            size="small"
                            disabled={followingProgress.some((id) => id === user.id)}
                            onClick={() => {
                                follow(user.id);
                            }}
                        >
                            Follow
                        </Button>
                    )}

                    {/*<Button size="small">Share</Button>*/}
                    {/*<Button size="small">Learn More</Button>*/}
                </CardActions>
            </Card>
        </div>
    );
};
