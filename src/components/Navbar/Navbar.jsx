import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = (props) => {
    return (
        <nav className={s.navigation}>
            <div><NavLink to="/profile" activeClassName={s.active}>MyProfile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
            <FriendsContainer />
        </nav>
    );
};

export default Navbar;