import {ActionsTypes} from "./store";

export type ProfilePageType = {
    posts: PostsType[]
    newText: string
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
    newText: ''
}

export const myPostReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
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
        default:
            return state
    }
}

export const AddPostAC = (text: string) => {
    return {
        type: "ADD-POST",
        text: text
    } as const
}
export const UpdateNewPostAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST",
        text: text
    } as const
}