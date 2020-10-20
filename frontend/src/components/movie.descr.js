import React from 'react';
import '../styles/movieDescr.css';

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
        <div className='movie-description'>
            <h3><span className='row-name'>Title:</span> {props.title}</h3>
            <h3><span className='row-name'>Release date:</span> {formattedDate()}</h3>
            <div className='movie-overview'>
                <h3><span className='row-name'>OVERVIEW</span></h3>
                <p>
                    {props.overview}
                </p>
            </div>
            <h3>
                <span className='age-restrict' style={props.adult ? {color: 'rgb(200, 0, 0)'} : {color: 'rgb(0, 200, 0)'}}>
                    {props.adult ? 
                    'Age restriction: 18 years!'
                    :
                    'No age restriction.'
                    }
                </span>
            </h3>
            <h3 className='homepage-link'><a href={props.homepage} target='_blank' rel='noopener noreferrer'>MOVIE HOMEPAGE</a></h3>
        </div>
    );
}

export default Description;