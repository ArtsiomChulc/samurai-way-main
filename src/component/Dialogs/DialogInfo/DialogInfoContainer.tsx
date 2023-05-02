import React from "react";
import {connect} from "react-redux";
import {DialogInfo} from "./DialogInfo";
import {DialogsPageType} from "../../Redux/dialogs-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../Redux/redux-store";


type MapStatePropsType = {
	dialogs: DialogsPageType
}
type MapDispatchToProps = {

}

export type DialogInfoPropsType = MapStatePropsType & MapDispatchToProps

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
	return {
		dialogs: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch: Dispatch) => {

}


const DialogInfoContainer = connect(mapStateToProps, mapDispatchToProps)(DialogInfo)

export default DialogInfoContainer