import usersReducer, { FollowSuccessAC, UnFollowSuccessAC, UsersPageType, UsersType } from "Redux/users-reducer";

const state: UsersPageType = {
    users: [
        {
            followed: true,
            id: 1,
            name: "sdsdsd",
            status: null,
            photos: { small: null, large: null },
            uniqueUrlName: null,
        },
    ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
    portionSize: 2,
};

it("status should be changed ", function () {
    const action = FollowSuccessAC(1);
    // const action = UnFollowSuccessAC(1);

    const newState = usersReducer(state, action);

    expect(newState.users[0].followed).toBe(true);
});

it("status should be changed ", function () {
    const action = UnFollowSuccessAC(1);

    const newState = usersReducer(state, action);

    expect(newState.users[0].followed).toBe(false);
});
