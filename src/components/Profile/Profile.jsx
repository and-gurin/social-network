import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer postData={props.postData}
                     dispatch={props.dispatch}
                     store={props.store}
                     />
        </div>
    );
};

export default Profile;