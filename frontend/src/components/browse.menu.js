import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/browseMenu.css';

function BrowseMenu(){

    return (
        <div className="dropdown">
            <button className="dropbtn">Browse</button>
            <div className="dropdown-content">
                <Link to='/all/movie'>Movies</Link>
                <Link to='/all/tv'>TV Series</Link>
                <Link to='/all/person'>Actors</Link>
            </div>
        </div>
    );

}

export default BrowseMenu;