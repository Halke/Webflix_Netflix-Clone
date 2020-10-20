import React from 'react';
import HomeBackground from '../components/homeBackground';
import HomeNavbar from '../components/homeNavbar';
import Subscribe from '../components/subscribe';
import Card from '../components/card';
import Accordion from '../components/accordion';
import HomeFooter from '../components/homeFooter';
import '../styles/HomePage.css';

function HomePage() {

    return(
        <div id="homepage">
            <HomeBackground> 
                <HomeNavbar signIn={true} className='navbar-homepage' />
                <div className="hero-homepage-content">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <Subscribe />
                </div>
            </HomeBackground> 
            <div className="cards-homepage">
                <Card 
                    heading='Enjoy on your TV.' 
                    text='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
                    sideOfImg='right'
                    imgSrc={process.env.PUBLIC_URL + '/images/Netflix_CardImage1.png'}
                />
                <Card
                    heading='Download your shows to watch offline.' 
                    text='Save your favorites easly and always have something to watch.'
                    sideOfImg='left'
                    imgSrc={process.env.PUBLIC_URL + '/images/Netflix_CardImage21.png'}
                />
                <Card
                    heading='Watch everywhere.' 
                    text='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
                    sideOfImg='right'
                    imgSrc={process.env.PUBLIC_URL + '/images/Netflix_CardImage3.png'}
                />
                <div className="faq-section">
                    <h1>Frequently Asked Questions</h1>
                    <Accordion heading='What is Webflix?'>
                        <p>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, 
                            documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, 
                            whenever you want without a single commercial – all for one low monthly price. There's always something 
                            new to discover and new TV shows and movies are added every week!
                        </p>
                    </Accordion>
                    <Accordion heading='What is Webflix?'>
                        <p>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, 
                            documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, 
                            whenever you want without a single commercial – all for one low monthly price. There's always something 
                            new to discover and new TV shows and movies are added every week!
                        </p>
                    </Accordion>
                    <Accordion heading='What is Webflix?'>
                        <p>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, 
                            documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, 
                            whenever you want without a single commercial – all for one low monthly price. There's always something 
                            new to discover and new TV shows and movies are added every week!
                        </p>
                    </Accordion>
                    <Accordion heading='What is Webflix?'>
                        <p>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, 
                            documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, 
                            whenever you want without a single commercial – all for one low monthly price. There's always something 
                            new to discover and new TV shows and movies are added every week!
                        </p>
                    </Accordion>
                    <div className='subscribe-section'>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <Subscribe style={{width: '80%'}}/>
                    </div>
                </div>
            </div>
            <div className='homepage-footer'>
                <HomeFooter />
            </div>
        </div>
    );
}

export default HomePage;