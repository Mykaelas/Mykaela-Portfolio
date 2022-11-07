import React from 'react';
import Movie from '../../Assets/Git Project Pictures/Movie.jpg';
import Compere from '../../Assets/Git Project Pictures/compere.jpg';
import Do from '../../Assets/Git Project Pictures/do.png';
import Schedule from '../../Assets/Git Project Pictures/Schedule.png';
import Cards from '../../Assets/Git Project Pictures/Cards.png';
import Fitsical from '../../Assets/Git Project Pictures/Fitsical.png';

//import one at a time

// This will 
function Portfolio() {
 // use flexbox
    return (
        <div id="parentContainer">
            <div id="cardContainer">
                <div id="card">
                    <img src={Movie} alt="MoodFlix" />
                    <h1> #MoodFlix </h1>
                    <div id="websiteContainer">
                        <a href="https://github.com/bjennings90/Movie-Finder" rel="noopener">
                            GitHub
                        </a>
                        <a href="https://bjennings90.github.io/Movie-Finder/" rel="noopener">
                            Website
                        </a> 
                    </div>
                </div>
            </div>
            <div id="cardContainer">
                <div id="card">
                    <img src={Compere} alt="Compere" />
                    <h1> Compére </h1>
                    <div id="websiteContainer">
                        <a href="https://github.com/AHudg/compere" rel="noopener">
                            GitHub
                        </a>
                        <a href="https://vast-eyrie-87159.herokuapp.com/" rel="noopener">
                            Website
                        </a> 
                    </div>
                </div>
            </div>
            <div id="cardContainer">
                <div id="card">
                    <img src={Do} alt="Do you have that in the back?" />
                    <h1> Do you have that in the back? </h1>
                    <div id="websiteContainer">
                        <a href="https://github.com/Mykaelas/Do-You-Have-That-In-The-Back" rel="noopener">
                            GitHub
                        </a>
                        <a href="https://www.youtube.com/watch?v=RF0-2K2CSqk" rel="noopener">
                            Youtube
                        </a> 
                    </div>
                </div>
            </div>
            <div id="cardContainer">
                <div id="card">
                    <img src={Schedule} alt="Inside Notes" />
                    <h1> Inside Notes </h1>
                    <div id="websiteContainer">
                        <a href="https://github.com/Mykaelas/Inside-Notes" rel="noopener">
                            GitHub
                        </a>
                        <a href="https://afternoon-garden-11659.herokuapp.com/notes" rel="noopener">
                            Website
                        </a> 
                    </div>
                </div>
            </div>
            <div id="cardContainer">
                <div id="card">
                    <img src={Cards} alt="Have You Met Linda" />
                    <h1> Have You Met Linda</h1>
                    <div id="websiteContainer">
                        <a href="https://github.com/Mykaelas/Have-You-Met-Linda" rel="noopener">
                            GitHub
                        </a>
                        <a href="https://www.youtube.com/watch?v=ogiMFJVgBAA" rel="noopener">
                            Youtube
                        </a> 
                    </div>
                </div>
            </div>
            <div id="cardContainer">
                <div id="card">
                    <img src={Fitsical} alt="Let's Get Fitsical" />
                    <h1> Let's Get Fitsical</h1>
                    <div id="websiteContainer">
                        <a href="https://github.com/Mykaelas/lets-get-fitsical" rel="noopener">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;