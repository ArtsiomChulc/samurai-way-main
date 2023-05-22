import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {navbarReducer} from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navbarFriends: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// let state = store.getState()

// export type StoreType = typeof store
export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;

export default store