import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthPageType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}

let initialState: AuthPageType = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state: AuthPageType = initialState, action: ActionsType): AuthPageType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data
            }

        case "TOGGLE-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

type SetUserDataType = ReturnType<typeof SetUserDataAC>
type ToggleFetchType = ReturnType<typeof ToggleFetchAC>

type ActionsType = SetUserDataType | ToggleFetchType


const SetUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        data: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const ToggleFetchAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE-FETCHING",
        isFetching
    } as const
}


// THUNK

export const authMeThunkCreator = () => (dispatch: Dispatch) => {
    dispatch(ToggleFetchAC(true))
    return authAPI.getAuthMe().then(data => {
        dispatch(ToggleFetchAC(false))
        if (data.resultCode === 0) {
            dispatch(SetUserDataAC(data.data.id, data.data.login, data.data.email, true))
        }
    })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    dispatch(ToggleFetchAC(true))
    authAPI.login(email, password, rememberMe).then(data => {
        dispatch(ToggleFetchAC(false))
        if (data.resultCode === 0) {
            dispatch(SetUserDataAC(data.data.id, data.data.login, data.data.email, true))
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}

export const logOutTC = () => (dispatch: Dispatch) => {
    dispatch(ToggleFetchAC(true))
    authAPI.logOut().then(data => {
        dispatch(ToggleFetchAC(false))
        if (data.resultCode === 0) {
            dispatch(SetUserDataAC(null, null, null, false))
        }
    })
}

export default authReducer

