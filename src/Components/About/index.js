import React from 'react';
import coverImage from '../../assets/cover/pawel-czerwinski-ruJm3dBXCqw-unsplash.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Mykaela Saenz</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
                  Hello, 
                  My name is Mykaela Saenz, a JavaScript developer. *insert more stuff in here later*
        </p>
      </div>
    </section>
  );
}

export default About;
