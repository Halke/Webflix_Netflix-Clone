import React from 'react';
import '../styles/selectCategory.css';

function Select({type, onChange, value}) {
    return (
        type === 'movie'
        ?
        <select className='select-category' value={value} onChange={(e) => onChange(e)}>
            <option value='popular'>Popular</option>
            <option value='top_rated'>Top Rated</option>
            <option value='upcoming'>Upcoming</option>
        </select>
        :
        <select className='select-category' value={value} onChange={(e) => onChange(e)}>
            <option value='popular'>Popular</option>
            <option value='top_rated'>Top Rated</option>
        </select>
    );
}

export default Select;