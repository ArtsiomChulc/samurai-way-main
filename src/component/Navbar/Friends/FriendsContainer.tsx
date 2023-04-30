import React from "react";
import {NavbarFriendsType} from "../../Redux/store";
import {connect} from "react-redux";
import {Friends} from "./Friends";

let mapStateToProps = (state: NavbarFriendsType) => {
	return {
		friends: state.friends
	}
}

let mapDispatchToProps = () => {

}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer