import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {myPostReducer} from "./myPost-reducer";
import {navbarReducer} from "./navbar-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: myPostReducer,
    navbarFriends: navbarReducer
})



let store = createStore(reducers)

let state = store.getState()

export type StoreType = typeof store
export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;

export default store