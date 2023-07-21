import s from "./friends.module.css";
import { FriendsPropsType } from "./FriendsContainer";

export const Friends = (props: FriendsPropsType) => {
    return (
        <div className={s.friendsWrap}>
            <h3>Friends:</h3>
            <div className={s.friendFlex}>
                {props.friends.map((el) => {
                    return (
                        <div onClick={props.v} key={el.id} className={s.friend}>
                            <img src={el.imageUrl} alt="Avatar" />
                            <p>{el.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
