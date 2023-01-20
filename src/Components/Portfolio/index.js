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
                <div id="card" >
                    <div className='imageContainer'>
                        <img src={Movie} alt="MoodFlix" className="cardPicture moodflix" />
                        <div className="spoiler">
                            <span>
                                MoodFlix is an app that lets you choose movies based on your mood with an emoji menu!
                                Languages used: HTML, CSS, JavaScript, 2 Server-side API's
                                (IMDB and landOf.Dev movie API), Materialize CSS, GoogleFonts, 
                                and GitHub.
                            </span>
                        </div>
                    </div>
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
                <div className='imageContainer'>
                    <img src={Do} alt="Do you have that in the back?" className="cardPicture"/>
                    <div className="spoilerDoYouHave">
                        <span>
                            This is a solely backend project that helps companies keep track of their
                            inventory stock. This helps companies to categorize their products in an 
                            easy to use way. <br />
                            The languages used in this project are Insomnia, JavaScript,
                            NodeJs, Express, Sequelize, dotenv package, GitHub, and MySQL/MySQL2.
                        </span>
                    </div>
                </div>
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
                <div className='imageContainer'>
                    <img src={Thought} alt="Thought Alert" className="cardPicture"/>
                    <div className="spoilerDoYouHave">
                            <span>
                                This is a social network that allows users to like, comment, 
                                and write posts to share with their friends, as well as add people 
                                to their friends list. 
                                <br /> 
                                The languages used to create this project are: JavaScript, NodeJs,
                                MongoDB/Mongoose, Express, Insomnia, and GitHub.
                            </span>
                        </div>
                </div>    
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
                <div className='imageContainer'>
                    <img src={Cards} alt="Have You Met Linda" className="cardPicture"/>
                    <div className="spoilerHaveYouMet">
                        <span>
                        An application that allows employers to keep track of their
                        employees and which department they are in. <br />
                        The languages used are: HTML, CSS, JavaScript,
                        NodeJS, Inquirer, Jest, and GitHub
                        </span>   
                    </div>
                </div>
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