import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addNewMessageActionCreator, updateNewPostTextActionCreator} from './../../../state/state'

const MyPosts = (props) => {

    const newPostElement = React.createRef()

    const addPostsButton = () => {
      props.dispatch(addNewMessageActionCreator())
    }

    const onePostChange = () => {
        let text  = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.postData.profilePage.newPostText}
                              onChange={onePostChange}
                              cols="30" rows="2"/>
                    <div><button onClick={addPostsButton}>Add post</button></div>
                </div>
            </div>
            <div className={s.posts}>
                {props.postData.profilePage.postData.map(p=><Post message={p.message} likeCount={p.likeCount}/>)}
            </div>

        </div>
    );
};

export default MyPosts;