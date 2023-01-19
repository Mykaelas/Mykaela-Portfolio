import React from 'react';
import Github from '../../Assets/Icons/GitHub-Mark/PNG/GitHub-Mark-64px.png'
import Indeed from '../../Assets/Icons/linkedin.png'
import Email from '../../Assets/Icons/email.png'

// This is the footer function that will appear at the bottom of each page
// ADD IN ONE MORE THIRD PLATFORM(Stack overflow, twitter, etc)
function Footer() {
    return (
        <footer>
            <div className="footerA">
                <a href="https://www.linkedin.com/in/mykaela-saenz-526211141/" target="_blank" rel="noreferrer">
                    <img height="62px" width="60px" src={Indeed} alt='indeed icon' />
                </a>
                <a href="https://github.com/Mykaelas" target="_blank" rel="noreferrer">
                    <img src={Github} alt="Github icon" />
                </a>
                <a href=" mailto:mykaela.saenz1@gmail.com" target="_blank" rel="noreferrer">
                    <img src={Email} alt="Email icon" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;