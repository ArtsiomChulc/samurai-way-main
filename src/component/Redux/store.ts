// // let render = () => {
// // 	console.log('render')
// // }
// //
// // //===///====///======//// subscribe, observer
// //
// // export const subscribe = (observer: () => void) => {
// //
// // 	render = observer
// // }
//
// //======/////==========/////====================///=========================///=============//
//
//
//
// import {AddPostAC, profileReducer, UpdateNewPostAC} from "./myPost-reducer";
// import {AddMessageAC, dialogsReducer, UpdateNewMessageTextAC} from "./dialogs-reducer";
//
// type PostType = {
// 	id: number
// 	post: string
// 	likeCount: number
// }
//
// type MessageType = {
// 	id: number
// 	message: string
// }
//
// type DialogType = {
// 	id: number
// 	name: string
// }
//
// type ProfilePageType = {
// 	posts: PostType[]
// 	newText: string
// }
//
// type DialogsPageType = {
// 	dialogs: DialogType[]
// 	messages: MessageType[]
// 	messageInInput: string
// }
//
// type RootStateType = {
// 	dialogsPage: DialogsPageType
// 	profilePage: ProfilePageType
// 	navbarFriends: NavbarFriendsType
// }
//
// type StoreType = {
// 	_state: RootStateType
// 	// addPost: (text: string) => void
// 	// updateNewPostText: (text: string) => void
// 	// addMessage: (messageText: string) => void
// 	// updateNewMessageText: (textMessage: string) => void
// 	_render: () => void
// 	dispatch: (action: ActionsTypes) => void
// 	subscribe: (observer: () => void) => void
// 	getState: () => RootStateType
// }
// type ProfilePageActionType = AddPostType | UpdateNewPostTextType
// type DialogsPageActionType = AddMessageType | UpdateNewMessageText
// export type ActionsTypes = AddPostType | UpdateNewPostTextType | AddMessageType | UpdateNewMessageText
//
// export type AddPostType = ReturnType<typeof AddPostAC>
// type AddMessageType = ReturnType<typeof AddMessageAC>
//
// type UpdateNewPostTextType = ReturnType<typeof UpdateNewPostAC>
// type UpdateNewMessageText = ReturnType<typeof UpdateNewMessageTextAC>
//
// //for navbar-friends
// type FriendType = {
// 	id: number
// 	name: string
// 	imageUrl: string
// }
//
// type NavbarFriendsType = {
// 	friends: FriendType[]
// }
//
// const store: StoreType = {
// 	_state: {
// 		dialogsPage: {
// 			dialogs: [
// 				{ id: 1, name: 'Dimych' },
// 				{ id: 2, name: 'Andrey' },
// 				{ id: 3, name: 'Sasha' },
// 				{ id: 4, name: 'Sveta' },
// 				{ id: 5, name: 'Mark' },
// 				{ id: 6, name: 'Oleg' },
// 			],
// 			messages: [
// 				{ id: 1, message: 'Ok!!!' },
// 				{ id: 2, message: 'Hello...' },
// 				{ id: 3, message: 'Goood!! ' },
// 				{ id: 4, message: 'How are u?' },
// 				{ id: 5, message: 'I.m OK!!!' },
// 				{ id: 6, message: 'Yo!!! Go home!!!' },
// 			],
// 			messageInInput: ''
// 		},
// 		profilePage: {
// 			posts: [
// 				{ id: 1, post: 'Hello.....', likeCount: 2 },
// 				{ id: 2, post: 'Go to home', likeCount: 8 },
// 				{ id: 3, post: 'I am Artsiom', likeCount: 2 },
// 				// { id: 4, post: 'Yo Yo Yo Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 4 },
// 				// { id: 5, post: 'Mark, how are you?', likeCount: 6 },
// 				// { id: 6, post: 'Oleg, it\'s good job!!!Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 0 },
// 			],
// 			newText: ''
// 		},
// 		navbarFriends: {
// 			friends: [
// 				{ id: 1, name: 'Vanya', imageUrl: 'https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg' },
// 				{ id: 2, name: 'Olia', imageUrl: 'https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg' },
// 				{ id: 3, name: 'Victor', imageUrl: 'https://media.istockphoto.com/id/1432732353/photo/web-icon-man-middle-aged-man-with-blond-hair.jpg?s=1024x1024&w=is&k=20&c=SPveyNL9BKcZRIYFhIiTAPV6jmKVuJJRXGH1k0Y_OC8=' },
// 			]
// 		},
// 	},
// 	// addPost (text: string) {
// 	// 	// let textValue = this._state.profilePage.newText
// 	// 	// let newPostObj: PostType = { id: 7, post: text, likeCount: 0 }
// 	// 	// if (text.length === 0 || text.trim() == '') {
// 	// 	// 	return
// 	// 	// } else {
// 	// 	// 	this._state.profilePage.posts.unshift(newPostObj)
// 	// 	// }
// 	// 	// this._state.profilePage.newText = ''
// 	// 	//
// 	// 	// this._render()
// 	// },
// 	// updateNewPostText(text: string) {
// 	// 	// this._state.profilePage.newText = text
// 	// 	//
// 	// 	// this._render()
// 	// },
// 	// addMessage(messageText: string) {
// 	// 	// let textMessage = this._state.dialogsPage.messageInInput
// 	// 	// let newMessage:MessageType = { id: 7, message: messageText}
// 	// 	// if (messageText.length === 0 || messageText.trim() == '') {
// 	// 	// 	return
// 	// 	// } else {
// 	// 	// 	this._state.dialogsPage.messages.unshift(newMessage)
// 	// 	// }
// 	// 	// this._state.dialogsPage.messageInInput = ''
// 	// 	//
// 	// 	// this._render()
// 	// },
// 	// updateNewMessageText(textMessage: string){
// 	// 	this._state.dialogsPage.messageInInput = textMessage
// 	//
// 	// 	this._render()
// 	// },
// 	_render() {
// 		console.log('render')
// 	},
// 	dispatch(action) {
// 		profileReducer(this._state.profilePage, action as ProfilePageActionType)
// 		dialogsReducer(this._state.dialogsPage, action as DialogsPageActionType)
// 		this._render()
// 		// switch (action.type) {
// 		// 	// case "ADD-POST":
// 		// 	// 	let newPostObj: PostType = { id: 7, post: action.text, likeCount: 0 }
// 		// 	// 	if (action.text.length === 0 || action.text.trim() == '') {
// 		// 	// 		return
// 		// 	// 	} else {
// 		// 	// 		this._state.profilePage.posts.unshift(newPostObj)
// 		// 	// 	}
// 		// 	// 	this._state.profilePage.newText = ''
// 		// 	// 	this._render()
// 		// 	// 	break
// 		// 	// case "UPDATE-NEW-POST":
// 		// 	// 	this._state.profilePage.newText = action.text
// 		// 	// 	this._render()
// 		// 	// 	break
// 		// 	// case "ADD-MESSAGE":
// 		// 	// 	let newMessage:MessageType = { id: 7, message: action.text}
// 		// 	// 	if (action.text.length === 0 || action.text.trim() == '') {
// 		// 	// 		return
// 		// 	// 	} else {
// 		// 	// 		this._state.dialogsPage.messages.unshift(newMessage)
// 		// 	// 	}
// 		// 	// 	this._state.dialogsPage.messageInInput = ''
// 		// 	//
// 		// 	// 	this._render()
// 		// 	// 	break
// 		// 	// case "UPDATE-NEW-MESSAGE-TEXT":
// 		// 	// 	this._state.dialogsPage.messageInInput = action.textMessage
// 		// 	// 	this._render()
// 		// }
// 	},
// 	subscribe(observer) {
// 		this._render = observer
// 	},
// 	getState() {
// 		return this._state
// 	}
// }
//
// // добавление постов в Profile ниже
// // export const addPost = () => {
// // 	let textValue = state.profilePage.newText
// // 	let newPostObj: PostType = { id: 7, post: textValue, likeCount: 0 }
// // 	state.profilePage.posts.unshift(newPostObj)
// // 	state.profilePage.newText = ''
// //
// // 	render()
// // }
// // export const updateNewPostText = (text: string) => {
// // 	state.profilePage.newText = text
// //
// // 	render()
// // }
// //=======///=====///======////=====//////
//
//
// // добавление сообщения в Dialogs ниже
// // export const addMessage = () => {
// // 	let textMessage = state.dialogsPage.messageInInput
// // 	let newMessage:MessageType = { id: 7, message: textMessage}
// // 	state.dialogsPage.messages.unshift(newMessage)
// // 	state.dialogsPage.messageInInput = ''
// //
// // 	render()
// // }
// // export const updateNewMessageText = (textMessage: string) => {
// // 	state.dialogsPage.messageInInput = textMessage
// //
// // 	render()
// // }
// //=====///========///=========///========///=======///======///
//
// export default store;

export {}
