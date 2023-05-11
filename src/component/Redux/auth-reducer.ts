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
                ...action.data,
                isAuth: true
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


export const SetUserDataAC = (id: number, login: string, email: string) => {
    return {
        type: "SET-USER-DATA",
        data: {
            id,
            login,
            email,
        }
    } as const
}

export const ToggleFetchAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE-FETCHING",
        isFetching
    } as const
}

export default authReducer