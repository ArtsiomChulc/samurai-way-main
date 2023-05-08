export type UsersPageType = {
    users: UsersType[]
}

export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: PhotosType
    status: null
    uniqueUrlName: null
}

type PhotosType = {
    small: null
    large: null
}

let initialState: UsersPageType = {
    users: []
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

type FollowType = ReturnType<typeof FollowAC>
type UnFollowType = ReturnType<typeof UnFollowAC>
type SetUsersType = ReturnType<typeof SetUsersAC>
type ActionsType = FollowType | UnFollowType | SetUsersType

export const FollowAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}
export const UnFollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}

export const SetUsersAC = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export default usersReducer