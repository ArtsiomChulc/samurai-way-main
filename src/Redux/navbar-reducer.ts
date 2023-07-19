export type FriendType = {
  id: number;
  name: string;
  imageUrl: string;
};

export type NavbarFriendsType = {
  friends: FriendType[];
};

let initialState: NavbarFriendsType = {
  friends: [
    {
      id: 1,
      name: "Vanya",
      imageUrl: "https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg",
    },
    {
      id: 2,
      name: "Olia",
      imageUrl: "https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg",
    },
    {
      id: 3,
      name: "Victor",
      imageUrl:
        "https://media.istockphoto.com/id/1432732353/photo/web-icon-man-middle-aged-man-with-blond-hair.jpg?s=1024x1024&w=is&k=20&c=SPveyNL9BKcZRIYFhIiTAPV6jmKVuJJRXGH1k0Y_OC8=",
    },
  ],
};

export const navbarReducer = (state = initialState, action: any) => {
  return state;
};
