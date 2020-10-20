import React from 'react';
import HomeBackground from '../components/homeBackground';
import SignUpWindow from '../components/window.signUp';
import HomeFooter from '../components/homeFooter';
import Navbar from '../components/homeNavbar';
import '../styles/SignUpPage.css';

function SignUp() {
    return (
        <HomeBackground>
            <Navbar signIn={false} />
            <SignUpWindow />
            <HomeFooter />
        </HomeBackground>
    );
}

export default SignUp;