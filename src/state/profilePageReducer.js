const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postData: [
        {id: '1', message: 'Hello my friend', likeCount: 11},
        {id: '2', message: 'Hello hi', likeCount: 22},
    ],
    newPostText: 'it-it'
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: '4',
                message: state.newPostText,
                likeCount: 0
            };
            state.postData.push(newMessage)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            console.log(state,action)
            state.newPostText = action.text;
            return state
        default:
            return state
    }
}

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE})
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, text:text})
 export default profilePageReducer