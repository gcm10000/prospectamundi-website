"use client"

import { Button } from '@/components/Button';
import OurServices from '@/components/SectionsServices/OurServices/OurServices';
import setup from '@/components/Transictions/Transictions';
import React, { useEffect, useRef } from 'react'
import '@/components/CenteredHeroSection/HeroSection.css';
import '@/components/SectionsContact/HeroSectionContact.css'

function ServicesLayout() {
    const servicesSectionRef = useRef<HTMLDivElement | null>(null);

    const scrollToServicesSection = () => {
        if (servicesSectionRef.current) {
          const yOffset = servicesSectionRef.current.getBoundingClientRect().top + window.pageYOffset - 80;
          console.log('yOffset', yOffset);
          window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
      };

    useEffect(() => {
        setup();
      }, []);

  return (
    <div>
        <div className='services hero-container'>
            <h1 className='services-h1'>NOSSOS SERVIÇOS</h1>
            <div style={{display: 'flex'}}>
                <Button
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={() => scrollToServicesSection()}
                    >
                    Confira Abaixo
                </Button>
            </div>
        </div>
        <OurServices reff={servicesSectionRef} />
    </div>
  )
}

export default ServicesLayout