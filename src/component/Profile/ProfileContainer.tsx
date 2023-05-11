import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {ProfilePageType, ProfileType, SetUsersProfileAC} from "../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";



class ProfileContainer extends React.Component<ProfileInfoPropsType>{

	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				this.props.SetUsersProfileAC(response.data)
				console.log(response.data)
			})
	}

	render () {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}

}

type MapDispatchPropsType = {
	SetUsersProfileAC: (profile: ProfileType) => void
}

type MapStatePropsType = {
	profile: ProfileType | null
}

export type ProfileInfoPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType) => {
	return {
		profile: state.profilePage.profile
	}
}

export default connect(mapStateToProps, {SetUsersProfileAC}) (ProfileContainer)