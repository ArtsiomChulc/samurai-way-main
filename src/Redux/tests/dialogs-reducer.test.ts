import { AddMessageAC, ChangMessageAC, DialogsPageType, dialogsReducer } from "Redux/dialogs-reducer";
import { AppPageType } from "Redux/app-reducer";

let state: DialogsPageType = {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Mark" },
        { id: 6, name: "Oleg" },
    ],
    messages: [
        { id: 1, message: "Ok!!!" },
        { id: 2, message: "Hello..." },
        { id: 3, message: "Goood!! " },
        { id: 4, message: "How are u?" },
        { id: 5, message: "I.m OK!!!" },
        { id: 6, message: "okay" },
    ],
};
it("array length must be greater", function () {
    const action = AddMessageAC("good text!!!");

    const newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(7);
});

it("message text needs to be changed", function () {
    const action = ChangMessageAC("new text message!!!", 2);

    const newState = dialogsReducer(state, action);

    expect(newState.messages[1].message).toBe("new text message!!!");
});
