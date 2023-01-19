import React from 'react';
import Movie from '../../Assets/Git Project Pictures/Movie.jpg';
import Do from '../../Assets/Git Project Pictures/do.png';
import Cards from '../../Assets/Git Project Pictures/Cards.png';
import Thought from '../../Assets/Git Project Pictures/Thought.png';

//import one at a time

// This will 
function Portfolio() {
 // use flexbox
    return (
        <div id="parentContainer">
            <div id="cardContainer">
                <div id="card">
                    <img src={Movie} alt="MoodFlix" className="cardPicture"/>
                    <h1> #MoodFlix </h1>
                    <div id="websiteContainer">
                        <a href="https://github.com/bjennings90/Movie-Finder" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a href="https://bjennings90.github.io/Movie-Finder/" target="_blank" rel="noreferrer">
                            Website
                        </a> 
                    </div>
                </div>
            </div>
            <div id="cardContainer">
                <div id="card">
                    <img src={Do} alt="Do you have that in the back?" className="cardPicture"/>
                    <h1 id="back"> Do you have that <br /> in the back? </h1>
                    <div id="websiteContainer">
                        <a href="https://github.com/Mykaelas/Do-You-Have-That-In-The-Back" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a href="https://www.youtube.com/watch?v=RF0-2K2CSqk" target="_blank" rel="noreferrer">
                            Youtube
                        </a> 
                    </div>
                </div>
            </div>
            <div id="cardContainer">
                <div id="card">
                    <img src={Thought} alt="Thought Alert" className="cardPicture"/>
                    <h1 id="back"> Thought Alert </h1>
                    <div id="websiteContainer">
                        <a href="https://github.com/Mykaelas/Thought-Alert" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a href="https://www.youtube.com/watch?v=dq8wYDqdoMY&ab_channel=MykaelaSaenz" target="_blank" rel="noreferrer">
                            Youtube
                        </a> 
                    </div>
                </div>
            </div>
            <div id="cardContainer">
                <div id="card">
                    <img src={Cards} alt="Have You Met Linda" className="cardPicture"/>
                    <h1> Have You Met Linda</h1>
                    <div id="websiteContainer">
                        <a href="https://github.com/Mykaelas/Have-You-Met-Linda" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a href="https://www.youtube.com/watch?v=ogiMFJVgBAA" target="_blank" rel="noreferrer">
                            Youtube
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;