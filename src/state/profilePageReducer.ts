const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: string
    message: string
    likeCount: number
}

export type PostDataType = Array<PostType>

export type ProfilePageType = {
    postData: PostDataType
    newPostText: string
}

let initialState: ProfilePageType = {
    postData: [
        {id: '1', message: 'Hello my friend', likeCount: 11},
        {id: '2', message: 'Hello hi', likeCount: 22},
    ],
    newPostText: 'it-it'
}

const profilePageReducer = (state = initialState, action: ProfilePageTypeACType):ProfilePageType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: '4',
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newMessage],
                newPostText:''
            }
        case UPDATE_NEW_POST_TEXT:
            console.log(state,action)
            return {
                ...state,
                newPostText: action.text
            }
        default:
            return state
    }
}

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE} as const)
export const updateNewPostTextActionCreator = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, text:text} as const)

export type addNewMessageActionCreatorType = ReturnType<typeof addNewMessageActionCreator>;
export type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>;

export type ProfilePageTypeACType = addNewMessageActionCreatorType | updateNewPostTextActionCreatorType;

 export default profilePageReducer