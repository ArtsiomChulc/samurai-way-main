import appReducer, { AppPageType, InitializedSuccessAC } from "Redux/app-reducer";

it("initialized should be !initialized ", function () {
    const state: AppPageType = {
        initialized: false,
    };
    const action = InitializedSuccessAC();

    const newState = appReducer(state, action);

    expect(newState.initialized).toBe(true);
});
