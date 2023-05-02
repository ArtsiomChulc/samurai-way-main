
export type UsersPageType = {
    users: UsersType[]
}

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}

let initialState: UsersPageType = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Artiom',
            status: 'learning react',
            location: {city: 'Orsha', country: 'Belarus'}
        },
        {
            id: 2,
            followed: false,
            fullName: 'Ivan',
            status: 'learning JS',
            location: {city: 'Vitebsk', country: 'Belarus'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Igor',
            status: 'learning C++',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    ],
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