import React from 'react';
import '../styles/inputField.css';

function InputField({placeholder, type, required, value, onChange}) {

    return required ? 
        <input 
            value={value} 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange}  
            required
        /> 
        : 
        <input 
            value={value} 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange}  
        /> 
}

export default InputField;