import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navigation}>
            <div><NavLink to="/profile" activeClassName={s.active}>MyProfile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
    );
};

export default Navbar;