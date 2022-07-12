import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import {friendsPageReducer} from "./friendsPageReducer";

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    friendsPage: friendsPageReducer
})
let store = createStore(rootReducer)

export type StoreType = typeof store;
export type AppStateType = ReturnType<typeof rootReducer>
export default store