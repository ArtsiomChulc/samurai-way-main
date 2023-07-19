import { Dispatch } from "redux";
import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { ThunkDispatch } from "redux-thunk";

const SET_USER_DATA = "AUTH/SET-USER-DATA" as const;
const TOGGLE_FETCHING = "AUTH/TOGGLE-FETCHING" as const;

export type AuthPageType = {
    id: number | null;
    login: string | null;
    email: string | null;
    isFetching: boolean;
    isAuth: boolean;
};

let initialState: AuthPageType = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
};

const authReducer = (state: AuthPageType = initialState, action: ActionsType): AuthPageType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };

        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default:
            return state;
    }
};

type SetUserDataType = ReturnType<typeof SetUserDataAC>;
type ToggleFetchType = ReturnType<typeof ToggleFetchAC>;

type ActionsType = SetUserDataType | ToggleFetchType;

const SetUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            login,
            email,
            isAuth,
        },
    } as const;
};

export const ToggleFetchAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_FETCHING,
        isFetching,
    } as const;
};

// THUNK

export const authMeThunkCreator = () => async (dispatch: Dispatch) => {
    dispatch(ToggleFetchAC(true));
    let data = await authAPI.getAuthMe();
    dispatch(ToggleFetchAC(false));
    if (data.resultCode === 0) {
        dispatch(SetUserDataAC(data.data.id, data.data.login, data.data.email, true));
    }
};

export const loginTC =
    (email: string, password: string, rememberMe: boolean) =>
    async (dispatch: ThunkDispatch<AuthPageType, any, any>) => {
        dispatch(ToggleFetchAC(true));
        let data = await authAPI.login(email, password, rememberMe);
        dispatch(ToggleFetchAC(false));
        if (data.resultCode === 0) {
            await dispatch(authMeThunkCreator());
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    };

export const logOutTC = () => async (dispatch: Dispatch) => {
    dispatch(ToggleFetchAC(true));
    let data = await authAPI.logOut();
    dispatch(ToggleFetchAC(false));
    if (data.resultCode === 0) {
        dispatch(SetUserDataAC(null, null, null, false));
    }
};

export default authReducer;
