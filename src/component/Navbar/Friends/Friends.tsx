import { NavbarFriendsType } from '../../Redux/State';
import s from './friends.module.css';


export const Friends = (props: NavbarFriendsType) => {

	return (
		<div className={s.friendsWrap}>
			{props.friends.map(el => {
				return (
					<div key={el.id} className={s.friend}>
						<img src={el.imageUrl} alt="Avatar" />
						<p>{el.name}</p>
					</div>
				)
			})}
		</div>
	)
} 