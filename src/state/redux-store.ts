import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import navbarPageReducer from "./navbarPageReducer";

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    navbarPage: navbarPageReducer
})
let store = createStore(rootReducer)

export type StoreType = typeof store;
export type AppStateType = ReturnType<typeof rootReducer>
export default store