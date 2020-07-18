import React from 'react'
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className="header">
            <img src="https://img.icons8.com/material/48/000000/user-male--v1.png"/>
            <div className="login-block">
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header