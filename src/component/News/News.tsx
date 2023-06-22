import React from 'react';
import s from './news.module.css';
import {withAuthRedirect} from "../../HOC/withAuthredirect";
import {compose} from "redux";


const News = () => {
	return (
		<div className={s.news}>
			News
		</div>
	)
}

export default compose(withAuthRedirect)(News)

// export default withAuthRedirect(News)