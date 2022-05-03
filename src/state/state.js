let rerenderEntireTree = () => {
    console.log("State changed")
}
let state = {
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
        ]
    },
    navbar: {
        friends: [
            {id: '1', name: 'Andrei'},
            {id: '2', name: 'Iryna'},
            {id: '3', name: 'Vanya'}
        ]
    }
}

export let addNewMessage = () => {
    let newMessage = {
        id: '4',
        message: state.profilePage.newPostText,
        likeCount: 0}
    state.profilePage.postData.push(newMessage)
    state.profilePage.newPostText = ''
        rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state