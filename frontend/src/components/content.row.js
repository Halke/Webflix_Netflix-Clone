import React, {useEffect, useState} from 'react';
import MovieCard from './movie.card';
import axios from 'axios';
import '../styles/moviesRow.css';

function MoviesRow({categoryTitle, apiRoute, type}){

    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3${apiRoute}?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&page=1`)
        .then(res => {
            setContent(res.data.results);
        })
        .catch(err => {
            console.log('An error occured while fetching data.');
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiRoute]);

    return (
        <div className='movies-row'>
            <h1 className='movies-category'>{categoryTitle}</h1>
            <div className='movies-row-listing'>
                {content.map(data => 
                    <MovieCard key={data.id} 
                        contentId={data.id} 
                        imageSource={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} 
                        type={type}
                    />
                )}
            </div>
        </div>
    );
}

export default MoviesRow;