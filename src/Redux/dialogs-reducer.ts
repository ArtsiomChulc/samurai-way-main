
export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
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
        {id: 6, message: 'okay'},
    ],
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: action.text}]
            }
            // let newMessage: MessageType = {id: 7, message: action.text}
            // if (action.text.length === 0 || action.text.trim() == '') {
            //     return state
            // } else {
            //     let stateCopy = {...state,
            //         messageInInput: '',
            //         messages: [...state.messages, {id: 7, message: state.messageInInput}]
            //     }
            //     // stateCopy.messages.unshift(newMessage)
            //     // state.messages.unshift(newMessage)
            //     // stateCopy.messageInInput = ''
            //     return stateCopy
            // }
        case "CHANGE-MESSAGE":
            let copyStateWithMessage = {...state}
            let newMessage = copyStateWithMessage.messages.find(m => m.id === action.id)
            if (newMessage) newMessage.message = action.newMessage
            return copyStateWithMessage
        default:
            return state
    }
}

type AddMessageType = ReturnType<typeof AddMessageAC>
type ChangMessageType = ReturnType<typeof ChangMessageAC>
type ActionsType = AddMessageType | ChangMessageType

export const AddMessageAC = (text: string) => {
    return {
        type: "ADD-MESSAGE",
        text: text
    } as const
}
export const ChangMessageAC = (newMessage: string, id: number) => {
    return {
        type: "CHANGE-MESSAGE",
        newMessage,
        id
    } as const
}