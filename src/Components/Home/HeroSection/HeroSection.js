import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h2>I'm Full Stack Developer <br/> & App Developer</h2>
                <p>Specializing in custom theme development. If you're a business <br/> seeking a web presence or are looking to hire, contact me here.</p>
                <button className="btn btn-warning rounded">Get Started</button>
            </div>
        </div>
    );
};

export default HeroSection;