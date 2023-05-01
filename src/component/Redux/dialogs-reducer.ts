import {ActionsTypes} from "./store";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageInInput: string
}


let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Mark'},
        {id: 6, name: 'Oleg'},
    ],
    messages: [
        {id: 1, message: 'Ok!!!'},
        {id: 2, message: 'Hello...'},
        {id: 3, message: 'Goood!! '},
        {id: 4, message: 'How are u?'},
        {id: 5, message: 'I.m OK!!!'},
        {id: 6, message: 'Yo!!! Go home!!!'},
    ],
    messageInInput: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessageType = {id: 7, message: action.text}
            if (action.text.length === 0 || action.text.trim() == '') {
                return state
            } else {
                state.messages.unshift(newMessage)
            }
            state.messageInInput = ''
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.messageInInput = action.textMessage
            return state
        default:
            return state
    }
}

export const AddMessageAC = (text: string) => {
    return {
        type: "ADD-MESSAGE",
        text: text
    } as const
}
export const UpdateNewMessageTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        textMessage: text
    } as const
}