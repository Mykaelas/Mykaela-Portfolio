import React from 'react';
import Profile from '../../Assets/Profile Picture/IMG_2392.JPG';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Mykaela Saenz</h1>
      <div className="my-2">
        <p>
          Hello, 
          My name is Mykaela Saenz, I am a JavaScript Developer with a Full Stack certificate from Rice University.
          I have worked on various projects that have included multiple different JavaScript libraries and extensions.
          Not only have I worked on solo projects but I've also been fortunate enough to work in groups with other talented
          classmates of mine. To view my work please click on my Portfolio tab. 
        </p>
        <img src={Profile} alt="Mykaela" />
      </div>
    </section>
  );
}

export default About;
