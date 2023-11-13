"use client"

import HeroSection from '@/components/HeroSection'
import BenefitSection from '@/components/SectionsHome/BenefitSection/BenefitSection'
import ContactSection from '@/components/SectionsHome/ContactSection/ContactSection'
import ProblemSolutionSection from '@/components/SectionsHome/ProblemSolutionSection/ProblemSolutionSection'
import setup from '@/components/Transictions/Transictions'
import React from 'react'
import { useEffect } from 'react'

function HomeLayout() {
    useEffect(() => {
        window.addEventListener("load", (event) => {
            setup();
            //console.log("page is fully loaded");
        });
        setup();
    }, 
    []);

  return (
    <>
      <HeroSection />
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