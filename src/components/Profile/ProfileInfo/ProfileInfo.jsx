import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img width='900px' src="https://i.pinimg.com/originals/a8/df/ce/a8dfce2e368765530b39351a723a665c.jpg" alt=""/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;