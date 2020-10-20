import React from 'react';
import SignInWindow from '../components/window.signIn';
import HomeNavbar from '../components/homeNavbar';
import HomeBackground from '../components/homeBackground';
import SignInFooter from '../components/signInFooter';
import '../styles/SignInPage.css';

function SignIn() {

    return (
        <HomeBackground className='signin-page'>
            <HomeNavbar signIn={false} />
            <SignInWindow />
            <SignInFooter />
        </HomeBackground>
    );

}

export default SignIn;