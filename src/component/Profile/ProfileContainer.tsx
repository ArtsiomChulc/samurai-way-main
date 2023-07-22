import React from "react";
import { Profile } from "./Profile";
import {
    getStatusProfileThunkCreator,
    getUsersProfileThunkCreator,
    ProfileType,
    updateStatusProfileThunkCreator,
} from "Redux/profile-reducer";
import { connect } from "react-redux";
import { AppRootStateType } from "Redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { getAuthId, getIsAuthSelector, getProfileReselect, getStatus } from "Redux/selectors/selectors";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUsersProfile(userId);

        this.props.getStatusProfile(userId);

        // profileAPI.getProfile(userId)
        //     .then(data => {
        //         this.props.SetUsersProfileAC(data)
        //     })
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusProfile}
                isAuth={this.props.isAuth}
            />
        );
    }
}

type MatchParamsType = {
    userId: string;
};

type PropsType = RouteComponentProps<MatchParamsType> & ProfileInfoPropsType;

type MapDispatchPropsType = {
    getUsersProfile: (id: string) => void;
    getStatusProfile: (id: string) => void;
    updateStatusProfile: (status: string) => void;
};

type MapStatePropsType = {
    profile: ProfileType | null;
    status: string;
    isAuth: boolean;
    authorizedUserId: string;
};

export type ProfileInfoPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: getProfileReselect(state),
        status: getStatus(state),
        isAuth: getIsAuthSelector(state),
        authorizedUserId: getAuthId(state),
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersProfile: getUsersProfileThunkCreator,
        getStatusProfile: getStatusProfileThunkCreator,
        updateStatusProfile: updateStatusProfileThunkCreator,
    }),
    // withAuthRedirect,
    withRouter,
)(ProfileContainer);

// const ProfileContainerWithRouter = withRouter(ProfileContainer)
//
// let WithReDirect = withAuthRedirect(ProfileContainerWithRouter)
//
// export default connect(mapStateToProps, {getUsersProfile: getUsersProfileThunkCreator})(WithReDirect)
