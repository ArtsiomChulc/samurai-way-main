import React from 'react';
import {Profile} from "./Profile";
import {getUsersProfileThunkCreator, ProfileType} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthredirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '22695'
		this.props.getUsersProfile(userId)
        // profileAPI.getProfile(userId)
        //     .then(data => {
        //         this.props.SetUsersProfileAC(data)
        //     })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

type MatchParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<MatchParamsType> & ProfileInfoPropsType

type MapDispatchPropsType = {
	getUsersProfile: (id: string) => void
}

type MapStatePropsType = {
    profile: ProfileType | null
}

export type ProfileInfoPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile: getUsersProfileThunkCreator}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)

// const ProfileContainerWithRouter = withRouter(ProfileContainer)
//
// let WithReDirect = withAuthRedirect(ProfileContainerWithRouter)
//
// export default connect(mapStateToProps, {getUsersProfile: getUsersProfileThunkCreator})(WithReDirect)

