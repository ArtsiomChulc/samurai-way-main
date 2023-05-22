import React from "react";
import {connect} from "react-redux";
import {Friends} from "./Friends";
import {FriendType} from "../../../Redux/navbar-reducer";
import {AppRootStateType} from "../../../Redux/redux-store";

type MapStatePropsType = {
	friends: FriendType[]
}
type MapDispatchPropsType = {
	friends: FriendType[]
}

export type FriendsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
	return {
		friends: state.navbarFriends.friends
	}
}

let mapDispatchToProps = () => {

}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer