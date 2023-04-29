import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {myPostReducer} from "./myPost-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: myPostReducer
})

export type StoreReduxType = ReturnType<typeof combineReducers>

let store = createStore(reducers)


// @ts-ignore
window.store = store;

export default store