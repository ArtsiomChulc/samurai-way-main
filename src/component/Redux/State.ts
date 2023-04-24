import { rerenderEntireTree } from '../../render'

export type PostType = {
	id: number
	post: string
	likeCount: number
}

export type MessageType = {
	id: number
	message: string
}

export type DialogType = {
	id: number
	name: string
}

export type ProfilePageType = {
	posts: PostType[]
	newText: string
}

export type DialogsPageType = {
	dialogs: DialogType[]
	messages: MessageType[]
	messageInInput: string
}

export type RootStateType = {
	dialogsPage: DialogsPageType
	profilePage: ProfilePageType
	navbarFriends: NavbarFriendsType
}

//for navbar-friends
export type FriendType = {
	id: number
	name: string
	imageUrl: string
}

export type NavbarFriendsType = {
	friends: FriendType[]
}

let state: RootStateType = {
	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Dimych' },
			{ id: 2, name: 'Andrey' },
			{ id: 3, name: 'Sasha' },
			{ id: 4, name: 'Sveta' },
			{ id: 5, name: 'Mark' },
			{ id: 6, name: 'Oleg' },
		],
		messages: [
			{ id: 1, message: 'Ok!!!' },
			{ id: 2, message: 'Hello...' },
			{ id: 3, message: 'Goood!! ' },
			{ id: 4, message: 'How are u?' },
			{ id: 5, message: 'I.m OK!!!' },
			{ id: 6, message: 'Yo!!! Go home!!!' },
		],
		messageInInput: 'string'
	},
	profilePage: {
		posts: [
			{ id: 1, post: 'Hello.....', likeCount: 2 },
			{ id: 2, post: 'Go to home', likeCount: 8 },
			{ id: 3, post: 'I am Artsiom', likeCount: 2 },
			// { id: 4, post: 'Yo Yo Yo Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 4 },
			// { id: 5, post: 'Mark, how are you?', likeCount: 6 },
			// { id: 6, post: 'Oleg, it\'s good job!!!Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 0 },
		],
		newText: ''
	},
	navbarFriends: {
		friends: [
			{ id: 1, name: 'Vanya', imageUrl: 'https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg' },
			{ id: 2, name: 'Olia', imageUrl: 'https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg' },
			{ id: 3, name: 'Victor', imageUrl: 'https://media.istockphoto.com/id/1432732353/photo/web-icon-man-middle-aged-man-with-blond-hair.jpg?s=1024x1024&w=is&k=20&c=SPveyNL9BKcZRIYFhIiTAPV6jmKVuJJRXGH1k0Y_OC8=' },
		]
	},
}

// добавление постов в Profile ниже
export const addPost = () => {
	let textValue = state.profilePage.newText
	let newPostObj: PostType = { id: 7, post: textValue, likeCount: 0 }
	state.profilePage.posts.unshift(newPostObj)
	state.profilePage.newText = ''

	rerenderEntireTree(state)
}
export const updateNewPostText = (text: string) => {
	state.profilePage.newText = text

	rerenderEntireTree(state)
}
//=======///=====///======////=====//////


// добавление сообщения в Dialogs ниже
export const addMessage = () => {
	let textMessage = state.dialogsPage.messageInInput
	let newMessage:MessageType = { id: 7, message: textMessage}
	state.dialogsPage.messages.unshift(newMessage)
	state.dialogsPage.messageInInput = ''

	rerenderEntireTree(state)
}
export const updateNewMessageText = (textMessage: string) => {
	state.dialogsPage.messageInInput = textMessage

	rerenderEntireTree(state)
}
//=====///========///=========///========///=======///======///


export default state;
