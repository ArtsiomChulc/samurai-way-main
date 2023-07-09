import {Dispatch} from "redux";
import {authMeThunkCreator} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";

export type AppPageType = {
    initialized: boolean

}

let initialState: AppPageType = {
    initialized: false
}

type ActionType = ReturnType<typeof InitializedSuccessAC>

const appReducer = (state: AppPageType = initialState, action: ActionType): AppPageType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


export const InitializedSuccessAC = () => {
    return {
        type: "SET-INITIALIZED"
    } as const
}


// THUNK

export const initializeAppTC = () => (dispatch: ThunkDispatch<any, any, any>) => {
    dispatch(authMeThunkCreator())
}


export default appReducer

