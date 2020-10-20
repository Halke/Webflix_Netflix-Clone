import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from '../components/signedIn.navbar';
import Footer from '../components/signedIn.footer';
import '../styles/PersonPage.css';

function PersonPage(props){

    const personId = props.match.params.personId;

    const [person, setPerson] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${personId}?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US`)
        .then(res => {
            setPerson(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [personId]);

    const formattedDate = (date) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let dateOfBirt = new Date(date);

        let formattedDate = `${dateOfBirt.getDate()}. `;
        formattedDate += `${months[parseInt(dateOfBirt.getMonth())]}`;
        formattedDate += ` ${dateOfBirt.getFullYear()}`;

        return formattedDate;
    }

    return (
        <div className='general-bg'>
            <Navbar />
            <div className='person-header'>
                <img src={person.profile_path ?
                            `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                            :
                            `${process.env.PUBLIC_URL}/images/profileImage.jpg`} 
                            alt={person.name}/>
            </div>
            <div className='person-descr'>
                <h1 className='person-name'>{person.name}</h1>
                <h2 className='person-descr-row'>
                    <span className='person-descr-rowname'>Department:</span> {person.known_for_department}
                </h2>
                <h2 className='person-descr-row'>
                    <span className='person-descr-rowname'>Date of Birth:</span> {formattedDate(person.birthday)}
                </h2>
                {person.deathday !== null 
                ? 
                <h2 className='person-descr-row'>
                    <span className='person-descr-rowname'>Date of Death:</span> {formattedDate(person.deathday)}
                </h2>
                :
                null}
                <h2 className='person-descr-row'>
                    <span className='person-descr-rowname'>Place of Birth:</span> {person.place_of_birth}
                </h2>
                <h2 className='person-descr-row'>
                    <span className='person-descr-rowname'>BIOGRAPHY</span>
                </h2>
                <p className='person-bio'>
                    {person.biography}
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default PersonPage;