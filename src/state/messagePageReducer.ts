const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'

type DialogType = {
    id:string
    name:string
}
type MessageType = {
    id:string
    message:string
}

type DialogDataType = Array<DialogType>

type MessagesDataType = MessageType[]

export type MessagePageType = {
    dialogsData:DialogDataType
    messagesData: MessagesDataType
    newMessageBody:string
}

let initialState: MessagePageType = {
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

const messagePageReducer = (state = initialState, action:MessagePageACType):MessagePageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.text
            }
        case SEND_NEW_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: '5', message: body}]
            }
        default:
            return state
    }
}

export const updateNewMessageBodyActionCreator = (body:string) => (
    {type: UPDATE_NEW_MESSAGE_BODY, text:body} as const)
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE} as const)

export type updateNewMessageBodyActionCreatorType = ReturnType<typeof updateNewMessageBodyActionCreator>
export type sendNewMessageActionCreatorType = ReturnType<typeof sendNewMessageActionCreator>

export type MessagePageACType = updateNewMessageBodyActionCreatorType | sendNewMessageActionCreatorType

export default messagePageReducer