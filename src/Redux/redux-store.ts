import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { navbarReducer } from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navbarFriends: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// let state = store.getState()

// export type StoreType = typeof store
export type AppRootStateType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;

export default store;
