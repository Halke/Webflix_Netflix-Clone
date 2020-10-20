import React from "react";
import '../styles/card.css';

function Card({heading, text, imgSrc, sideOfImg}) {



    return (
        <div className="homepage-card" style={{flexDirection: sideOfImg === 'right' ? 'row' : 'row-reverse'}}>
            <div className="card-side text-side">
                <h1>{heading}</h1>
                <h3>{text}</h3>
            </div>
            <div className="card-side image-side">
                <img src={imgSrc} alt="How it looks on a device"/>
            </div>
        </div>
    );
}

export default Card;