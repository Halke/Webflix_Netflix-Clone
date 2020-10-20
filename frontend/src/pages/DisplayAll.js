import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../components/movie.card';
import Navbar from '../components/signedIn.navbar';
import Select from '../components/select.category';
import '../styles/displayAll.css';
import Pagination from '../components/pagination';
import Footer from '../components/signedIn.footer';

function DisplayAll(props){
    let initialValue = 'popular';
    
    const [current, setCurrent] = useState({value: initialValue, activePage: 1});
    const [content, setContent] = useState({totalPages: 1, fetchedContent: []});

    let parameter = props.match.params.contentType;

    if(current.value === 'upcoming' && parameter === 'tv'){
        setCurrent({value: initialValue, activePage: 1});;
    }

    useEffect(() => {
        let apiRoute = `https://api.themoviedb.org/3/${parameter}/${current.value}?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US&page=${current.activePage}`;

        axios.get(apiRoute)
        .then(res => {
            let tempArr = res.data.results;
            setContent({totalPages: res.data.total_pages , fetchedContent: tempArr});
        })
        .catch(err => {console.log(err)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current.value, current.activePage, parameter]);

    useEffect(() => {
        setCurrent({...current, activePage: 1});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current.value, current.parameter]);

    const handleChange = e => {
        setCurrent({...current, value: e.target.value})
    };

    const setHeading = () => {
        if(parameter === 'tv'){
            if(current.value === 'popular') return 'Popular TV Series';
            else if(current.value === 'top_rated') return 'Top Rated TV Series';
            else if(current.value === 'latest') return 'Latest TV Series';
        }else if(parameter === 'movie'){
            if(current.value === 'popular') return 'Popular Movies';
            else if(current.value === 'top_rated') return 'Top Rated Movies';
            else if(current.value === 'upcoming') return 'Upcoming Movies';
        }else if(parameter === 'person') return 'Famous Persons';
    }

    return (
        <div className='general-bg'>
            <Navbar />
            <div className='content-type'>
                <h1>{setHeading()}</h1>
                {parameter !== 'person' ?
                <Select 
                    type={parameter} 
                    onChange={handleChange}
                    value={current.value}
                />
                :
                null
                }
            </div>
            <div className='content-section'>
                {content.fetchedContent.map((item, index) => 
                    <Card className='display-all-card'
                        key={`${item.id}_${index}`} 
                        contentId={item.id} 
                        imageSource={parameter !== 'person' ? 
                        `https://image.tmdb.org/t/p/w500/${item.poster_path}` 
                        : 
                        `https://image.tmdb.org/t/p/w500/${item.profile_path}`} 
                        type={parameter}
                    />
                )}
            </div>
            <div>
                <Pagination 
                    activePage={current.activePage} 
                    maxPages={content.totalPages} 
                    setCurrent={setCurrent}
                    current={current}
                />
            </div>
            <Footer />
        </div>
    );
}

export default DisplayAll;