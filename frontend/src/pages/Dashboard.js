import React from 'react';
import Navbar from '../components/signedIn.navbar';
import ContentRow from '../components/content.row';
import Footer from '../components/signedIn.footer';

function MoviesPage(){
    return (
        <div className='general-bg' id='movies-page'>
            <Navbar />
            <ContentRow categoryTitle='Top Rated' apiRoute='/movie/top_rated' type='movie' />
            <ContentRow categoryTitle='Weekly Movie Trending' apiRoute='/trending/movie/week' type='movie' />
            {/* <ContentRow categoryTitle='Today Trending' apiRoute='/trending/movie/day'/> */}
            <ContentRow categoryTitle='Popular TV Series' apiRoute='/tv/popular' type='tv' />
            <Footer />
        </div>
    );
}

export default MoviesPage;