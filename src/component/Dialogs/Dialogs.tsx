import React from 'react'
import s from './dialogs.module.css'
import MessageContainer from "./Message/MessageContainer";
import DialogInfoContainer from "./DialogInfo/DialogInfoContainer";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthredirect";
// import {DialogType, MessageType} from "../Redux/dialogs-reducer";

// type DialogsPropsType = {
//     messageInInput: string
//     dialogs: DialogType[]
//     messages: MessageType[]
//     dispatch: (action: ActionsTypes) => void
//     // addMessage: (messageText: string) => void
//     // updateNewMessageText: (text: string) => void
// }

const Dialogs = () => {


    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogs_names}>

                    <DialogInfoContainer />

                </div>
                <div className={s.messages}>

                    <MessageContainer
                        // messages={props.messages}
                        // dispatch={props.dispatch}
                        // messageInInput={props.messageInInput}
                    />

                </div>
            </div>
        </>

    )
}

export default compose<React.ComponentType>(withAuthRedirect)(Dialogs)