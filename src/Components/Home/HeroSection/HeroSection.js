import React from 'react';
import './HeroSection.css';
import resume from '../../../files/ashadul_islam-resume_ph.pdf';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h2>I'm Full Stack Developer <br/> & App Developer</h2>
                <p>Specializing in custom theme development. If you're a business <br/> seeking a web presence or are looking to hire, contact me here.</p>
                <a href={resume} download="ashadul-resume.pdf" ><button className="btn btn-warning rounded text-dark"><i class="fas fa-download"></i> Download Resume</button></a>
            </div>
        </div>
    );
};

export default HeroSection;