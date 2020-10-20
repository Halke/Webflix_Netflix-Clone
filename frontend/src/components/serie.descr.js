import React from 'react';
import '../styles/serieDescr.css';

function Description(props){
    
    const formattedDate = () => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let releaseDate = new Date(props.releaseDate);

        let formattedDate = `${releaseDate.getDate()}. `;
        formattedDate += `${months[parseInt(releaseDate.getMonth())]}`;
        formattedDate += ` ${releaseDate.getFullYear()}`;

        return formattedDate;
    }

    return (
        <div className='serie-description'>
            <h3><span className='row-name'>Title:</span> {props.title}</h3>
            <h3><span className='row-name'>Release date:</span> {formattedDate()}</h3>
            <h3><span className='row-name'>Number of seasons:</span> {props.numOfSeasons}</h3>
            <h3><span className='row-name'>Number of episodes:</span> {props.numOfEpisodes}</h3>
            <div className='serie-overview'>
                <h3><span className='row-name'>OVERVIEW</span></h3>
                <p>
                    {props.overview}
                </p>
            </div>
            {props.homepage ? 
            <h3 className='homepage-link'>
                <a href={props.homepage} target='_blank' rel='noopener noreferrer'>SERIE HOMEPAGE</a>
            </h3> 
            : 
            null}
        </div>
    );
}

export default Description;