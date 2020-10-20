import React from 'react';
import '../styles/submitButton.css';

function SubmitButton({buttonText}) {
    return <button className='submit-button-component' type='submit'>{buttonText}</button>
}

export default SubmitButton;