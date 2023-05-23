
import React from "react";
import {AddMessageAC, ChangMessageAC, DialogsPageType, UpdateNewMessageTextAC} from "../../../Redux/dialogs-reducer";
import {Message} from "./Message";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

// type MessagePropsType = {
//     messages: MessageType[]
//     dispatch: (action: ActionsTypes) => void
//     messageInInput: string
// }
// export const MessageContainer = (props: MessagePropsType) => {
//
//     const addMessageCB = (el: string) => {
//         props.dispatch(AddMessageAC(el))
//     }
//
//     const onChangeHandlerCB = (text: string) => {
//
//         props.dispatch(UpdateNewMessageTextAC(text))
//     }
//
//
//     return <Message
//         messages={props.messages}
//         addMessageCB={addMessageCB}
//         onChangeHandlerCB={onChangeHandlerCB}
//         messageInInput={props.messageInInput}
//     />
// }

export type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
export type MapDispatchPropsType = {
    addMessageCB: (el: string) => void
    onChangeHandlerCB: (text: string) => void
    onChangeMessageCB: (newMessage: string, id: number) => void
}

export type MessagePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessageCB: (el: string) => {
            if (el.length !== 0 || el.trim() !== '') {
                dispatch(AddMessageAC(el))
            }
        },
        onChangeHandlerCB: (text: string) => {

            dispatch(UpdateNewMessageTextAC(text))
        },
        onChangeMessageCB: (newMessage: string, id: number) => {
            dispatch(ChangMessageAC(newMessage, id))
    }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)

export default MessageContainer