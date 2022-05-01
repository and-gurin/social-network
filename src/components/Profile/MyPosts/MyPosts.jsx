import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    const addPostsButton = () => {
        let text  = newPostElement.current.value
      props.addNewMessage(text)
    }

    const newPostElement = React.createRef()
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} cols="30" rows="2">post</textarea>
                    <div><button onClick={addPostsButton}>Add post</button></div>
                </div>
            </div>
            <div className={s.posts}>
                {props.postData.map(p=><Post message={p.message} likeCount={p.likeCount}/>)}
            </div>

        </div>
    );
};

export default MyPosts;