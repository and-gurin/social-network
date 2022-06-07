import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import navbarPageReducer from "./navbarPageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    navbarPage: navbarPageReducer
})
let store = createStore(reducers)
export default store