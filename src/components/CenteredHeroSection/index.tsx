"use client"

import React, { ReactNode } from 'react';
import './HeroSection.css';

function HeroSection({ headline, subheadline, sourceVideo, button }: {
  headline: string,
  subheadline: string,
  sourceVideo: string
  button: ReactNode
}) {
  return (
    <div className='hero-container'>
      { !!sourceVideo && <video src={sourceVideo} autoPlay loop muted /> }
      <h1 style={{textAlign: 'center'}}>{headline}</h1>
      
      <h2 style={{textAlign: 'center', fontWeight: 200}}>{subheadline}</h2>
      { !!button && <div className='hero-btns'>
        { button }
      </div>}
    </div>
  );
}

export default HeroSection;