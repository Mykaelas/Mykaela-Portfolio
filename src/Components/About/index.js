import React from 'react';
import Profile from '../../Assets/Profile Picture/IMG_2392.JPG';

function About() {
  return (
      <div className="my-5">
        <img src={Profile} alt="Mykaela" className="mykaelaPicture" />
        <p className="my-2">
          Hello, my name is Mykaela Saenz, I am a JavaScript Developer with a Full Stack certificate from Rice University.
          I have worked on various projects that have included multiple different JavaScript libraries and extensions.
          Not only have I worked on solo projects but I've also been fortunate enough to work in groups with other talented
          classmates of mine. To view my work please click on my Portfolio tab. 
        </p>
      </div>
  );
}

export default About;
