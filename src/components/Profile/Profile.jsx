import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     updateNewPostText={props.updateNewPostText}
                     addNewMessage={props.addNewMessage}/>
        </div>
    );
};

export default Profile;