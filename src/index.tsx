import store from "./Redux/redux-store";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App
      // store={store}
      // addPost={addPost}
      // updateNewPostText={updateNewPostText}
      // addMessage={store.addMessage}
      // updateNewMessageText={store.updateNewMessageText}
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
);
