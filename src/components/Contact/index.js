import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Please enter a valid email address.');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if(!e.target.value.length) {
                setErrorMessage(`Please enter your ${e.target.name}.`);
            }
            else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!errorMessage) {
            console.log(formState);
        }
    }

    return (
        <div>
            <h2 className='mt-4 section-name'>Contact</h2>
            <div id='email-section' className='d-flex flex-column email-div ms-5 ps-5 mt-5'>
                Email: <a href='jacobbrister71@gmail.com'>jacobbrister71@gmail.com</a>
            </div>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div className='d-flex flex-column form-div mt-5 ms-5 ps-5'>
                    <label htmlFor='name'>Name: </label>
                    <input className='text-input' type='text' name='name' onBlur={handleChange}></input>
                </div>
                <div className='d-flex flex-column form-div mt-2 ms-5 ps-5'>
                    <label htmlFor='email'>Email: </label>
                    <input className='text-input' type='email' name='email' onBlur={handleChange}></input>
                </div>
                <div className='d-flex flex-column form-div mt-2 ms-5 ps-5'>
                    <label htmlFor='message'>Message: </label>
                    <textarea className='message-text' name='message' rows='5' onBlur={handleChange}></textarea>
                </div>
                {errorMessage && (
                    <div className='form-div mt-2 ms-5 ps-5'>
                        <p className='error-message'>{errorMessage}</p>
                    </div>
                )}
                <div className='form-div mt-2 ms-5 ps-5'>
                    <button type='sumbit' className='submit-btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;