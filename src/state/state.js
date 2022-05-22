const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
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
        navbar: {
            friends: [
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
        if (action.type === ADD_NEW_MESSAGE){
            let newMessage = {
                id: '4',
                message: this._state.profilePage.newPostText,
                likeCount: 0};
            this._state.profilePage.postData.push(newMessage)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY){

            this._state.messagePage.newMessageBody = action.text
            this._callSubscriber(this._state)
        } else if (action.type === SEND_NEW_MESSAGE){
            let body = this._state.messagePage.newMessageBody
            this._state.messagePage.newMessageBody = ''
            this._state.messagePage.messagesData.push({id:'5', message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE})
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, text:text})
export const updateNewMessageBodyActionCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, text:body})
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE})

export default store
window.store = store