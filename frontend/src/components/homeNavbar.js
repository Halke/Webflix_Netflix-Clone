import React from "react";
import '../styles/homeNavbar.css';
import {Link} from 'react-router-dom';

function HomeNavbar({signIn}) {
    return (
        <div id="navbar">
            <div className="navbar-heading">
                <h1>WEBFLIX</h1>
            </div>
            <div style={signIn ? {display: 'inherit'} : {display: 'none'}} className="navbar-btn">
                <Link to="/signin">Sign In</Link>
            </div>
        </div>
    );
}

export default HomeNavbar;