import React from "react";
import './Styles/About.css';
import Tilt from 'react-parallax-tilt';
import Timeline from "./Timeline";
import Github from "./Github";

const About = () => {
    return (
        <>
            <div id="About">
                <Tilt gyroscope={true} className="tilt_title">
                    <h2 data-aos="zoom-in">About <span className="prof" >Me</span></h2>
                    <div className="img_card" data-aos="zoom-in"></div>
                </Tilt>
                <div className="info-title" data-aos="zoom-in">
                <h2 data-aos="zoom-in" className="about-title-mobile">About <span className="prof" >Me</span></h2>
                    {/* <p className="greet-title">Hi there,</p> */}
                    <p className="about-text">I'm Aman, currently I live in Pune studying Information Technolgy in Dr.D.Y.Patil College of Engineering.
                        My Projects include Attractive Websites and Blockchain based Web Apps. I'm also into Machine Learning.Being comfortable with coding allows me to to rapidly prototype and solve problems.</p>
                    <p className="about-text">Ready to turn your ideas into reality? I'm excited to collaborate on projects that push the boundaries of technology and creativity.<br></br>Checkout<a href="/#Skills" className="arrowLink"> Softwares and Tools </a>that I use.</p>
                    <div className="msg-btn">
                        <a href="/resume.pdf" id="download" download='AmanResume'>Download CV <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="/#Contact" className="btnA">Let's Talk <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <Timeline/>
            <Github/>
        </>
    )
}
export default About;