import React from 'react'
import {ActionsTypes, DialogType, MessageType} from '../Redux/store'
import {DialogInfo} from './DialogInfo/DialogInfo'
import s from './dialogs.module.css'
import {MessageContainer} from "./Message/MessageContainer";

type DialogsPropsType = {
    messageInInput: string
    dialogs: DialogType[]
    messages: MessageType[]
    dispatch: (action: ActionsTypes) => void
    // addMessage: (messageText: string) => void
    // updateNewMessageText: (text: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {


    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogs_names}>

                    <DialogInfo dialogs={props.dialogs}/>

                </div>
                <div className={s.messages}>

                    <MessageContainer
                        messages={props.messages}
                        dispatch={props.dispatch}
                        messageInInput={props.messageInInput}
                    />

                </div>
            </div>
        </>

    )
}