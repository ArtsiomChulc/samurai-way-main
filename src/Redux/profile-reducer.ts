import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

type PhotosType = {
    small: string
    large: string
}

type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: true
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type ProfilePageType = {
    posts: PostsType[]
    newText: string
    profile: ProfileType | null
}

export type PostsType = {
    id: number
    post: string
    likeCount: number
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'Hello.....', likeCount: 2},
        {id: 2, post: 'Go to home', likeCount: 8},
        {id: 3, post: 'I am Artiom', likeCount: 2},
        // { id: 4, post: 'Yo Yo Yo Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 4 },
        // { id: 5, post: 'Mark, how are you?', likeCount: 6 },
        // { id: 6, post: 'Oleg, it\'s good job!!!Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 0 },
    ],
    newText: '',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            // let newPostObj: PostsType = {id: 7, post: action.text, likeCount: 0}
            if (action.text.length === 0 || action.text.trim() == '') {
                return state
            } else {
                return {
                    ...state,
                    newText: '',
                    posts: [...state.posts, {id: 7, post: action.text, likeCount: 0}]
                }
            }
        case "UPDATE-NEW-POST":
            let stateCopy = {...state}
            stateCopy.newText = action.text
            return stateCopy
        case "SET-USERS-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "CHANGE-MESSAGE":
            let copyStateWithMessage = {...state}
            let newPost = copyStateWithMessage.posts.find(p => p.id === action.id)
            if (newPost) newPost.post = action.newMessage
            return copyStateWithMessage
        default:
            return state
    }
}

type AddPostType = ReturnType<typeof AddPostAC>
type UpdateNewPostType = ReturnType<typeof UpdateNewPostAC>
type SetUsersProfileType = ReturnType<typeof SetUsersProfileAC>
type ChangeMessageType = ReturnType<typeof ChangeMessageAC>
type ActionsTypes = AddPostType | UpdateNewPostType | SetUsersProfileType | ChangeMessageType

export const AddPostAC = (text: string) => {
    return {
        type: "ADD-POST",
        text
    } as const
}
export const UpdateNewPostAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST",
        text
    } as const
}
const SetUsersProfileAC = (profile: ProfileType) => {
    return {
        type: "SET-USERS-PROFILE",
        profile
    } as const
}

export const ChangeMessageAC = (newMessage: string, id: number) => {
    return {
        type: "CHANGE-MESSAGE",
        newMessage,
        id
    } as const
}

// THUNK

export const getUsersProfileThunkCreator = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(SetUsersProfileAC(data))
        })
}