import {ActionsTypes, PostType, ProfilePageType} from "./store";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'Hello.....', likeCount: 2},
        {id: 2, post: 'Go to home', likeCount: 8},
        {id: 3, post: 'I am Artsiom', likeCount: 2},
        // { id: 4, post: 'Yo Yo Yo Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 4 },
        // { id: 5, post: 'Mark, how are you?', likeCount: 6 },
        // { id: 6, post: 'Oleg, it\'s good job!!!Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 0 },
    ],
    newText: ''
}

export const myPostReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPostObj: PostType = {id: 7, post: action.text, likeCount: 0}
            if (action.text.length === 0 || action.text.trim() == '') {
                return
            } else {
                state.posts.unshift(newPostObj)
            }
            state.newText = ''
            return state
        case "UPDATE-NEW-POST":
            state.newText = action.text
            return state
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