import React from 'react';
import {addNewMessageActionCreator, updateNewPostTextActionCreator} from "../../../state/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const addPosts = () => {
      props.store.dispatch(addNewMessageActionCreator())
    }

    const onePostChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
       <MyPosts updateNewPostText={onePostChange}
                addNewMessage={addPosts}
                postData={state.profilePage.postData}
                newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;