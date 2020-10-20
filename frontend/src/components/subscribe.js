import React, {useState} from 'react';
import '../styles/subscribe.css';

function HomePage() {
    const [email, setEmail] = useState('');

    const subscribe = () => {
        if(!email.includes('@')){
            alert('You have to enter email first!');
        }else{
            alert(`You successfully subscribed with email: ${email}`);
            setEmail('');
        }
    }

    return( 
        <div className="subscribe-to-netflix">
            <input 
                type="email" 
                placeholder="Email address" 
                value={email} 
                onChange={e => {setEmail(e.target.value)}} 
                required 
            />
            <button onClick={subscribe} className="subscribe-btn">TRY 30 DAYS FREE</button>
        </div>        
    );
}

export default HomePage;