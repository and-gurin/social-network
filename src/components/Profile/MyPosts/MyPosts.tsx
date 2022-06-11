import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = useRef<HTMLInputElement & HTMLTextAreaElement>(null)

    const addPostsButton = () => {
      props.addNewMessage()
    }

    const onePostChange = () => {
        let text  = newPostElement.current?.value
        if(text){
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onePostChange}
                              cols={30} rows={3}/>
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


