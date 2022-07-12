import React from "react";
import Friends from "./Friends";
import {AppStateType} from "../../state/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAc, FriendsPageType, FriendsType, setFriends, unfollowAc} from "../../state/friendsPageReducer";

/*
const FriendsContainer = () => {

  return (
      <StoreContext.Consumer>
        {
          (store)=>{
              if(store){
                  const state = store.getState().navbarPage.friendsData
                  return <Friends title='Friends' friendsData={state}/>
              }
          }
        }
      </StoreContext.Consumer>
      )
}
export default FriendsContainer*/

type mapStatePropsType = {
    friendsPage: FriendsPageType
    title: string
}
type mapDispatchPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users:Array<FriendsType>) => void
}
export type FriendsPropsType = mapStatePropsType & mapDispatchPropsType;

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        friendsPage: state.friendsPage,
        title: 'Friends'
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {

        follow: (id: string)=>{
            dispatch(followAc(id))
        },
        unfollow: (id: string)=>{
            dispatch(unfollowAc(id))
        },
        setUsers: (friends:Array<FriendsType>)=>{
            dispatch(setFriends(friends))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export default FriendsContainer;
