
export type PostType = {
	id: number
	message: string
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
}

export type DialogsPageType = {
	dialogs: DialogType[]
	messages: MessageType[]
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
		]
	},
	profilePage: {
		posts: [
			{ id: 1, message: 'Hello.....', likeCount: 2 },
			{ id: 2, message: 'Go to home', likeCount: 8 },
			{ id: 3, message: 'I am Artsiom', likeCount: 2 },
			{ id: 4, message: 'Yo Yo Yo Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 4 },
			{ id: 5, message: 'Mark, how are you?', likeCount: 6 },
			{ id: 6, message: 'Oleg, it\'s good job!!!Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 0 },
		]
	},
	navbarFriends: {
		friends: [
			{ id: 1, name: 'Vanya', imageUrl: 'https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg' },
			{ id: 2, name: 'Olia', imageUrl: 'https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg' },
			{ id: 3, name: 'Victor', imageUrl: 'https://media.istockphoto.com/id/1432732353/photo/web-icon-man-middle-aged-man-with-blond-hair.jpg?s=1024x1024&w=is&k=20&c=SPveyNL9BKcZRIYFhIiTAPV6jmKVuJJRXGH1k0Y_OC8=' },
		]
	}


}

export const addPost = (post: string) => {
	let newPostObj: PostType = { id: 7, message: post, likeCount: 0 }
	state.profilePage.posts.push(newPostObj)
}

export default state;
