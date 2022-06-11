
type FriendsType = {
    id: string
    name: string
}

export type FriendsDataType = Array<FriendsType>

export type NavbarPageType = {
    friendsData: FriendsDataType
}

let initialState: NavbarPageType = {
    friendsData: [
        {id: '1', name: 'Andrei'},
        {id: '2', name: 'Iryna'},
        {id: '3', name: 'Vanya'}
    ]
}
const navbarPageReducer = (state = initialState) => {
    return state
}

export default navbarPageReducer