import React, { useEffect } from 'react';
import '../styles/Home.css';
import Aos from 'aos';

function Home(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
    })
    return (
        <div className='home'>
            <div className='about'>
            <h2>Hello, My Name is Marc Pinero</h2>
            <div className='prompt'> <p>
                I am a software developer with a passion for learning and creating.
                </p>
        
            </div>
            </div>
            <div data-aos="flip-up" className='skills'>
                <h1>Skills</h1>
                <ul className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>HTML, CSS, JavaScript, React.js, and React Hooks.</span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>Node.js, PostgreSQL, and Express.js.</span>
                </li>
                <li className='item'>
                    <h2>Misc</h2>
                    <span>Mocha, Chai, Git, Github, Heroku.</span>
                </li>
                </ul>
            </div>
            </div>
    )
}

export default Home;