import React from 'react';
import '../styles/homeBackground.css';

function HomeBackground({children}) {

    return (
        <div className="hero-homepage">
            <div className='hero-homepage-overlay'>   
                {children}
            </div>
        </div>
    );
}

export default HomeBackground;