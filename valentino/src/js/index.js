import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux"; //Provider wraps up your React application and makes it aware of the entire Redux’s store
import store from "../js/store/index";
import App from "./components/App";

// import { addArticle } from "../js/actions/index";

// window.store = store;
// window.addArticle = addArticle;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
