import React from 'react';
import Resume from '../../Assets/Resume/Mykaela Saenz Resume.pdf';


function Nav(props) {
  const {
    setTabSelected,
  } = props;


  // add on click for contact, resume, and portfolio
  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setTabSelected('about')}>
              About
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="projects" href="#projects" onClick={() => setTabSelected('projects')}>
              Projects
            </a>
          </li>
          <li className="mx-2">
            <button id="resumeBtn"> 
              <a href={Resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
