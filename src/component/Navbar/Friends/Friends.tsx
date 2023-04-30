import { NavbarFriendsType } from '../../Redux/store';
import s from './friends.module.css';


export const Friends = (props:NavbarFriendsType) => {

	return (
		<div className={s.friendsWrap}>
			<h3>Friends:</h3>
			<div className={s.friendFlex}>
				{props.friends.map(el => {
					return (
						<div key={el.id} className={s.friend}>
							<img src={el.imageUrl} alt="Avatar" />
							<p>{el.name}</p>
						</div>
					)
				})}
			</div>

		</div>
	)
} 