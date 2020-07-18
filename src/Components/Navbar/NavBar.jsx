//боковое статичное навигационное меню для социальной сети
//аватарки 3 друзей пока временные, будут изменения в этом пункте

import React from 'react'
import './NavBar.css'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {

    //вариант let friendsNav = props.friends.map( friend => <label>{friend.name}</label>)
    //NavLink только меняет URL в браузере без перезагрузки страницы

    return <div>
            <nav className="nav">
                <div className='item'>
                    <NavLink to="/profile">Profile</NavLink></div>
                <div className='item'>
                    <NavLink to="/dialogs">Messages</NavLink></div>
                <div className='item'>
                    <NavLink to="/news">News</NavLink></div>
                <div className='item'>
                    <NavLink to="/music">Music</NavLink></div>
                <div className='item'>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
                <div className='friends'>
                    <NavLink to="/users">Find users</NavLink>
                    </div>
            </nav>
    </div>
}

export default NavBar