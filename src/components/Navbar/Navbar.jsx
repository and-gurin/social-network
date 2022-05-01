import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.navigation}>
            <div><NavLink to="/profile" activeClassName={s.active}>MyProfile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
            <h3>Friends</h3>
            <div className={s.friends}>
                {props.navbarData.friends.map(item=>{
                    return <div className={s.item}>
                        <div className={s.itemRound}></div>
                        <div>{item.name}</div>
                    </div>
                })}
            </div>

        </nav>
    );
};

export default Navbar;