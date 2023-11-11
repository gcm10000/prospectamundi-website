"use client"

import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1 style={{textAlign: 'center'}}>Prospectando o Mundo</h1>
      
      <h2 style={{textAlign: 'center', fontWeight: 200}}>Auxiliamos empresas em seu crescimento exponencial</h2>
      <div className='hero-btns'>
        {/* <Button
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        <Button
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to="/contato"
        >
          ENTRE EM CONTATO
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;