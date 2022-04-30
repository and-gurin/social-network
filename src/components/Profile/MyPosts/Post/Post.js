import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.freelance.ru/images/att/1324133_900_600.png" alt="ava"/>
            {props.message}
            <div><span>like</span> {props.likeCount}</div>
        </div>
    );
};

export default Post;