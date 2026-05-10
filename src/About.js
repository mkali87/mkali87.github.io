import React from "react";
import Common from "./Common";
import web from "../src/images/about-me.png";
import myCV from '../src/Khurshid-CV.docx';

const About = () =>{
  return(
    <>
    <Common 
    name=""
    content="Hello there! I am a Sr. UI/UX Designer living in New Delhi, India. Since my youngest age, I have been passionate about design and development. I grew up with the Internet like Designing & Development interest focusing on HTML, CSS, SASS, Bootstrap, Javascript, Jquery, WordPress, Angular, Git etc. I have experience in Photoshop and Figma as well. Basically, I am a UI Designer/Developer and code lover. I possess more than 11 years of Web Design and Front-End Development experience."
    imgsrc={web} 
    viewbutton={[<a href={myCV} className="btn btn-light" rel="noopener noreferrer" download="Khurshid-CV">Get My CV</a>]}
    displey="d-none" />
    </>
  )
} 

export default About;