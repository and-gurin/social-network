const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'

let initialState = {
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
}

const messagePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.text;
            return state;
        case SEND_NEW_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesData.push({id: '5', message: body})
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyActionCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, text:body})
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE})

export default messagePageReducer