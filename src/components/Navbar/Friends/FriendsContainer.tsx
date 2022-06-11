import React from "react";
import Friends from "./Friends";
import StoreContext from "../../../StoreContext";

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
export default FriendsContainer