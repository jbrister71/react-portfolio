import React from 'react';

function Resume() {
    return (
        <div>
            <h2 className='mt-4 section-name'>Resume</h2>

            <p className='resume-text ms-5 ps-5 mt-3'>Click <a href='#' className='resume-link'>here</a> to download my resume.</p>

            <h3 className='left-align ms-5 ps-5 mt-3'>Front-end Proficiencies</h3>

            <ul className='left-align ms-5'>
                <li className='ms-5'>HTML</li>
                <li className='ms-5'>CSS</li>
                <li className='ms-5'>Javascript</li>
                <li className='ms-5'>jQuery</li>
                <li className='ms-5'>React</li>
                <li className='ms-5'>Bootstrap</li>
            </ul>

            <h3 className='left-align ms-5 ps-5 mt-3'>Back-end Proficiencies</h3>

            <ul className='left-align ms-5'>
                <li className='ms-5'>APIs</li>
                <li className='ms-5'>Express</li>
                <li className='ms-5'>SQL</li>
                <li className='ms-5'>MongoDB</li>
            </ul>
        </div>
    )
}

export default Resume;