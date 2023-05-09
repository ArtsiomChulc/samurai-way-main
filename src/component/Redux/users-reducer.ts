export type UsersPageType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
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
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
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
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-USERS-TOTAL-COUNT":
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        default:
            return state
    }
}

type FollowType = ReturnType<typeof FollowAC>
type UnFollowType = ReturnType<typeof UnFollowAC>
type SetUsersType = ReturnType<typeof SetUsersAC>
type SetCurrentPageType = ReturnType<typeof SetCurrentPageAC>
type SetUsersTotalCountType = ReturnType<typeof SetUsersTotalCountAC>
type ActionsType = FollowType | UnFollowType | SetUsersType | SetCurrentPageType | SetUsersTotalCountType

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

export const SetCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    } as const
}

export const SetUsersTotalCountAC = (totalUserCount: number) => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        totalUserCount: totalUserCount
    } as const
}

export default usersReducer