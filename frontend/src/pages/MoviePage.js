import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Description from '../components/movie.descr';
import '../styles/MoviePage.css';
import Navbar from '../components/signedIn.navbar';
import Footer from '../components/signedIn.footer';

function Movie(props){
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.movieId}?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US`)
        .then(res => {
            setMovie(res.data);
        })
        .catch(err => {
            console.log('An error occured while fetching data. ' + err);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.movieId]);

    return (
        <div className='single-movie-page general-bg'>
            <Navbar className='single-movie-navbar'/>
            <div className='movie-info'>
                <img className='movie-page-header' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}/>
                <Description 
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                    adult={movie.adult}
                    homepage={movie.homepage} 
                />
            </div>
            <Footer />
        </div>
    );
}

export default Movie;