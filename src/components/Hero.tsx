import React from 'react'
import Navbar from './Navbar'
// import { title } from "process"
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div 
    id='hero'
    className="hero-container"
    >
      <Navbar />
      <div className='hero-content'>
        <div className='hidden lg:block'></div>

        <div className='hero-text'>
          <div className='hero-main'>
          <p data-aos="zoom-in-up">I&apos;m</p>
          <p data-aos="zoom-in-up">Ghulam</p>
          <p data-aos="zoom-in-up">Mustafa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;