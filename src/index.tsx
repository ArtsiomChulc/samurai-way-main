import state, {
    addMessage,
    addPost, subscribe,
    updateNewMessageText,
    updateNewPostText
} from './component/Redux/State';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />

        </BrowserRouter>,
        document.getElementById('root')
    )
}

subscribe(rerenderEntireTree)
