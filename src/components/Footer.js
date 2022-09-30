import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer(){
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://github.com/marcapinero' target="_blank">
                <GitHubIcon />
                </a>
                <a href='https://www.linkedin.com/in/marc-pinero/' target="_blank">
                <LinkedInIcon />
                </a>
            </div>
            <p> &copy; 2022 Marc Pinero</p>
            </div>
    )
}

export default Footer;