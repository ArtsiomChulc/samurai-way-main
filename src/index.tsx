import store from "./Redux/redux-store";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById("root"),
);
