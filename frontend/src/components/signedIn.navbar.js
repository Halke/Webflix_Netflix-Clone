import React from 'react';
import SignOut from './signOut.button';
import {Link} from 'react-router-dom';
import '../styles/signedInNavbar.css';
import ProfileIcon from './profileIcon';
import SearchBar from '../components/searchBar';
import BrowseMenu from '../components/browse.menu';

function Navbar(){
    return (
        <div id="signedin-navbar">
            <div className="signedin-navbar-heading">
                <h1 className='signedin-nav-logo'><Link to='/dashboard'>WEBFLIX</Link></h1>
                <BrowseMenu />
            </div>
            <div className="signout-nav-btn">
                <SearchBar />
                <ProfileIcon className='signout-nav-icon' imageSource={`${process.env.PUBLIC_URL}/images/profileIcon1.png`} alternative='Check my profile.'/>
                <SignOut/>
            </div>
        </div>
    );
}

export default Navbar;