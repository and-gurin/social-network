import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import friendsPageReducer from "./friendsPageReducer";



let store = {
    _state: {
        profilePage: {
            postData: [
                {id: '1', message: 'Hello my friend', likeCount: 11},
                {id: '2', message: 'Hello hi', likeCount: 22},
            ],
            newPostText: 'it-it'
        },
        messagePage: {
            dialogsData: [
                {id: '1', name: 'Andrei'},
                {id: '2', name: 'Iryna'},
                {id: '3', name: 'Vanya'},
                {id: '4', name: 'Sofia'},
                {id: '5', name: 'Roma'},
            ],
            messagesData: [
                {id: '1', message: 'Hello'},
                {id: '2', message: 'Hi-Hi'},
                {id: '3', message: 'You'},
                {id: '4', message: 'YouYou'},
            ],
            newMessageBody:'',
        },
        navbarPage: {
            friendsData: [
                {id: '1', name: 'Andrei'},
                {id: '2', name: 'Iryna'},
                {id: '3', name: 'Vanya'}
            ]
        }
    },
    _callSubscriber (){
        console.log("State changed")
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    getState (){
        return this._state;
    },
    dispatch (action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagePage = messagePageReducer(this._state.messagePage, action);
        this._state.navbarPage = friendsPageReducer(this._state.navbarPage, action);
        console.log(this._state.profilePage)
        this._callSubscriber(this._state)

    }
}


export default store
//window.store = store