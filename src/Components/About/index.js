import React from 'react';
import Profile from '../../Assets/Profile Picture/IMG_2392.JPG';

function About() {
  return (
      <div className="aboutContainerSection">
        <img src={Profile} alt="Mykaela" className="mykaelaPicture" />
        <p className="my-2">
          Hello, my name is Mykaela Saenz, I am a JavaScript Developer with a Full Stack certificate from Rice University.
          I have worked on various projects that have included multiple different languages and libraries such as JavaScript,
          HTML, CSS, ReactJs, and NodeJs just to name a few. 
          <br />
          Not only have I worked on solo projects but I've also been fortunate enough to work in groups with other talented
          classmates of mine. To view my work please click on my Portfolio tab. 
        
        </p>
      </div>
  );
}

export default About;
