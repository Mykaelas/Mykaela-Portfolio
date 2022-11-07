import React from 'react';
import Github from '../../Assets/Icons/GitHub-Mark/PNG/GitHub-Mark-64px.png'
import Indeed from '../../Assets/Icons/linkedin.png'

// This is the footer function that will appear at the bottom of each page
// ADD IN ONE MORE THIRD PLATFORM(Stack overflow, twitter, etc)
function Footer() {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/mykaela-saenz-526211141/" rel="noopener">
                <img height="62px" width="60px" src={Indeed} alt='indeed icon' />
            </a>
            <a href="https://github.com/Mykaelas" rel="noopener">
                <img src={Github} alt="Github icon" />
            </a>
        </footer>
    )
}

export default Footer;