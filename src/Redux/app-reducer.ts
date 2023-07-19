import { authMeThunkCreator } from "./auth-reducer";
import { ThunkDispatch } from "redux-thunk";

const SET_INIT = "APP/SET-INITIALIZED" as const;

export type AppPageType = {
    initialized: boolean;
};

let initialState: AppPageType = {
    initialized: false,
};

type ActionType = ReturnType<typeof InitializedSuccessAC>;

const appReducer = (state: AppPageType = initialState, action: ActionType): AppPageType => {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const InitializedSuccessAC = () => {
    return {
        type: SET_INIT,
    } as const;
};

// THUNK

export const initializeAppTC = () => (dispatch: ThunkDispatch<any, any, any>) => {
    let promiseApp = dispatch(authMeThunkCreator());
    Promise.all([promiseApp]).then(() => {
        dispatch(InitializedSuccessAC());
    });
};

export default appReducer;
