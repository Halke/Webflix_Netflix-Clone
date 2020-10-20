import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../components/signedIn.navbar';
import Description from '../components/serie.descr';
import Footer from '../components/signedIn.footer';
import '../styles/SeriePage.css';

function SeriePage(props){

    const [serie, setSerie] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${props.match.params.serieId}?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US`)
        .then(res => {
            console.log(res);
            setSerie(res.data)
        })
        .catch(err => {console.log('Error occured while fetching TV serie. Error: ' + err)})
    }, [props.match.params.serieId]);

    return (
        <div className='serie-page general-bg'>
            <Navbar className='serie-navbar'/>
            <div className='serie-info'>
                <img className='serie-page-header' src={`https://image.tmdb.org/t/p/w500/${serie.backdrop_path}`} alt={serie.title}/>
                <Description 
                    title={serie.name}
                    releaseDate={serie.first_air_date}
                    numOfEpisodes={serie.number_of_episodes}
                    numOfSeasons={serie.number_of_seasons}
                    overview={serie.overview}
                    homepage={serie.homepage}
                />
            </div>
            <Footer />
        </div>
    );

}

export default SeriePage;