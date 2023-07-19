import React from "react";
import { connect } from "react-redux";
import { DialogInfo } from "./DialogInfo";
import { DialogsPageType } from "../../../Redux/dialogs-reducer";
import { Dispatch } from "redux";
import { AppRootStateType } from "../../../Redux/redux-store";
import { log } from "util";

type MapStatePropsType = {
  dialogs: DialogsPageType;
};
type MapDispatchPropsType = {
  v: () => void;
};

export type DialogInfoPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    dialogs: state.dialogsPage,
  };
};

let mapDispatchToProps = () => {
  return {
    v: () => console.log("dialog-test"),
  };
};

const DialogInfoContainer = connect(mapStateToProps, mapDispatchToProps)(DialogInfo);

export default DialogInfoContainer;
