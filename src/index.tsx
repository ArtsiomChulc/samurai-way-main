import store from './component/Redux/redux-store';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
                <App
                    store={store}
                    // addPost={addPost}
                    // updateNewPostText={updateNewPostText}
                    // addMessage={store.addMessage}
                    // updateNewMessageText={store.updateNewMessageText}
                />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree()