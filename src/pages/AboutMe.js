import React from 'react';
import "../styles/AboutMe.css";
import photoOfMe from "./../assets/portfolio-photo.png";


function AboutMe(){
return (
    <div className='aboutMe'>
    <h1>About Me</h1>
    <br />
    <img className='profilePhoto' src={photoOfMe} />    
    <p>
        I am mechanically minded, and I love to think of creative ways to build something from the ground up. 
        Over the years I have learned to be a team player, and collaborate with others on projects. 
        I am excited about my journey to becoming a software developer. With clear communication, thinking outside of the box, and being a team player, 
        I believe I will be a great addition to any software development team.
    </p>
    <p>
        Outside of coding, you can catch me being out in nature, and staying active. 
        In my spare time, I love playing racquetball, skateboarding, playing the guitar, and reading about deep philosophical problems. 
    </p>     
    </div>
)
}

export default AboutMe;