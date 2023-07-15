import { AddPostAC, DeletePostAC, ProfilePageType, profileReducer } from "Redux/profile-reducer";

let state: ProfilePageType = {
    posts: [
        { id: 1, post: "Hello.....", likeCount: 2 },
        { id: 2, post: "Go to home", likeCount: 8 },
        { id: 3, post: "I am Artiom", likeCount: 2 },
        {
            id: 4,
            post: "Yo Yo Yo Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            likeCount: 4,
        },
        { id: 5, post: "Mark, how are you?", likeCount: 6 },
        // { id: 6, post: 'Oleg, it\'s good job!!!Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.', likeCount: 0 },
    ],
    profile: null,
    status: "",
};

it("new post should be added ", function () {
    let action = AddPostAC("new text post ");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6);
});

it("text new post should be corrected ", function () {
    let action = AddPostAC("new text post ");

    let newState = profileReducer(state, action);

    expect(newState.posts[5].post).toBe("new text post ");
});

it("after deleting length of posts array should be decrement ", function () {
    let action = DeletePostAC(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});
