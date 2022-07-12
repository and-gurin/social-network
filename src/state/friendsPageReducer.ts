type LocationType = {
    city: string
    country: string
}
export type FriendsType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type FriendsDataType = Array<FriendsType>

export type FriendsPageType = {
    friendsData: FriendsDataType
}

let initialState: FriendsPageType = {
    friendsData: [
        {id: '1', followed: true, fullName: 'Andrei', status:'I am employee', location:{city: 'Warsaw', country: 'Poland'}},
        {id: '2', followed: false, fullName: 'Ivan', status:'I am student', location:{city: 'Poznan', country: 'Poland'}},
        {id: '3', followed: false, fullName: 'Iryna', status:'I am employee', location:{city: 'Warsaw', country: 'Poland'}},

    ]
}
export const friendsPageReducer = (state = initialState, action: FriendsPageActionType):FriendsPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                friendsData: state.friendsData
                    .map(item => {
                        if(item.id === action.id){
                            return {...item ,followed : false}
                        } return item
                    })
            }
        case "UNFOLLOW":
            return {
                ...state,
                friendsData: state.friendsData
                    .map(item => {
                        if(item.id === action.id){
                            return {...item ,followed : true}
                        } return item
                    })
            }
        case "SET-FRIENDS":
            return {
                ...state,
                friendsData: [...state.friendsData, ...action.friends]
            }
        default:
                return state
    }


}

export const followAc = (id: string)=> ({type: 'FOLLOW', id} as const);
export const unfollowAc = (id: string)=> ({type: 'UNFOLLOW', id} as const);
export const setFriends = (friends: Array<FriendsType>)=> ({type: 'SET-FRIENDS', friends} as const);

export type FollowACType = ReturnType<typeof followAc>;
export type UnfollowACType = ReturnType<typeof unfollowAc>;
export type SetFriendsACType = ReturnType<typeof setFriends>;
export type FriendsPageActionType = FollowACType | UnfollowACType | SetFriendsACType