import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    const newPostElement = useRef()

    const addPostsButton = () => {
      props.addNewMessage()
    }

    const onePostChange = () => {
        let text  = newPostElement.current.value
        console.log(text)
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onePostChange}
                              cols="30" rows="2"/>
                    <div><button onClick={addPostsButton}>Add post</button></div>
                </div>
            </div>
            <div className={s.posts}>
                {props.postData.map(p=><Post message={p.message}
                                             likeCount={p.likeCount}/>)}
            </div>

        </div>
    );
};

export default MyPosts;