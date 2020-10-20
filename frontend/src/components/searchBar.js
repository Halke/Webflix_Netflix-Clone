import React, {useState} from 'react';
import '../styles/searchBar.css';

function SearchBar(){
    const [value, setValue] = useState('');

    const handleChange = e => {setValue(e.target.value)};

    return (
        <form className='search-form' method='POST'>
            <button type='submit' className='search-submit-btn'>
                <i className="fas fa-search"></i>
            </button>
            <input
                className='search-bar' 
                type='text' 
                placeholder='Search' 
                value={value} 
                onChange={(e) => handleChange(e)} 
            />
        </form>
    );
}

export default SearchBar;