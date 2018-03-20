import { createStore } from "redux";
import rootReducer from "../reducers/index"

const store = createStore(rootReducer);
// createStore is the function for creating the Redux store.
// createStore takes a reducer as the first argument, rootReducer in our case.

export default store;

