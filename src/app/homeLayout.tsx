"use client"

import { Button } from '@/components/Button';
import HeroSection from '@/components/CenteredHeroSection';
import BenefitSection from '@/components/SectionsHome/BenefitSection/BenefitSection';
import ContactSection from '@/components/SectionsHome/ContactSection/ContactSection';
import ProblemSolutionSection from '@/components/SectionsHome/ProblemSolutionSection/ProblemSolutionSection';
import setup from '@/components/Transictions/Transictions';
import React from 'react';
import { useEffect } from 'react';

function HomeLayout() {
    useEffect(() => {
        window.addEventListener("load", (event) => {
            setup();
        });
        setup();
    }, 
    []);

  return (
    <>
      <HeroSection 
          sourceVideo='/videos/video-2.mp4'
          headline='Prospectando o Mundo'
          subheadline='Auxiliamos empresas em seu crescimento exponencial'
          button={<Button
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            to="/contato"
          >
            ENTRE EM CONTATO
          </Button> } />
      <BenefitSection />
      <ContactSection headline='Se deseja maiores informações sobre nossos recursos, entre em contato agora mesmo.' to='/contato' />
      <ProblemSolutionSection />
      <ContactSection 
            headline='Entre no banco de talentos!' 
            to='/contato?q=4'
            buttonText='Enviar Currículo' />
    </>
  )
}

export default HomeLayout