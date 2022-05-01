let state = {
    profilePage: {
        postData: [
            {id: '1', message: 'Hello my friend', likeCount: 11},
            {id: '2', message: 'Hello Hello', likeCount: 22},
        ],
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

export let addNewMessage = (message) => {
    let newMessage = {id: '4', message: message, likeCount: 0}
    state.profilePage.postData.push(newMessage)
}
export default state