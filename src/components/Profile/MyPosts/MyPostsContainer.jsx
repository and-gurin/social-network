import React from 'react';
import {addNewMessageActionCreator, updateNewPostTextActionCreator} from "../../../state/profilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    let state = store.getState();

                    const addPosts = () => {
                        store.dispatch(addNewMessageActionCreator())
                    }

                    const onePostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }

                    return <MyPosts updateNewPostText={onePostChange}
                                    addNewMessage={addPosts}
                                    postData={state.profilePage.postData}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;