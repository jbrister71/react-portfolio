import React from 'react';


function Contact() {
    return (
        <div>
            <h2 className='mt-4 section-name'>Contact</h2>
            <form id='contact-form'>
                <div className='d-flex flex-column form-div mt-5 ms-5 ps-5'>
                    <label htmlFor='name'>Name: </label>
                    <input className='text-input' type='text' name='name' defaultValue='Name'></input>
                </div>
                <div className='d-flex flex-column form-div mt-2 ms-5 ps-5'>
                    <label htmlFor='email'>Email: </label>
                    <input className='text-input' type='email' name='email' defaultValue='Email'></input>
                </div>
                <div className='d-flex flex-column form-div mt-2 ms-5 ps-5'>
                    <label htmlFor='message'>Message: </label>
                    <textarea className='message-text' rows='5' defaultValue='Message'></textarea>
                </div>
            </form>
        </div>
    )
}

export default Contact;