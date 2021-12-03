import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import HomeSlider from '../HomeSlider/HomeSlider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeroSection></HeroSection>
            <HomeSlider></HomeSlider>
        </div>
    );
};

export default Home;