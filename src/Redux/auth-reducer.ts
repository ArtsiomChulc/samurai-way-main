import { Dispatch } from "redux";
import { authAPI } from "api/api";
import { stopSubmit } from "redux-form";
import { ThunkDispatch } from "redux-thunk";

const SET_USER_DATA = "AUTH/SET-USER-DATA" as const;
const TOGGLE_FETCHING = "AUTH/TOGGLE-FETCHING" as const;
const GET_CAPTCHA_URL = "AUTH/GET-CAPTCHA-URL" as const;

export type AuthPageType = {
    id: number | null;
    login: string | null;
    email: string | null;
    isFetching: boolean;
    isAuth: boolean;
    captchaURL: string | null;
};

let initialState: AuthPageType = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
    captchaURL: null,
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
        case "AUTH/GET-CAPTCHA-URL":
            return {
                ...state,
                captchaURL: action.captchaURL,
            };
        default:
            return state;
    }
};

type SetUserDataType = ReturnType<typeof SetUserDataAC>;
type ToggleFetchType = ReturnType<typeof ToggleFetchAC>;
type GetCaptchaType = ReturnType<typeof GetCaptchaAC>;

type ActionsType = SetUserDataType | ToggleFetchType | GetCaptchaType;

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

export const GetCaptchaAC = (captchaURL: string) => {
    return {
        type: GET_CAPTCHA_URL,
        captchaURL,
    };
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
            if (data.resultCode === 10) {
                await dispatch(getCaptchaTC());
            }
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

export const getCaptchaTC = () => async (dispatch: Dispatch) => {
    debugger;
    const data = await authAPI.getCaptcha();
    const captchaURL = data.url;
    dispatch(GetCaptchaAC(captchaURL));
};

export default authReducer;
