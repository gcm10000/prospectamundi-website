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
        setup();
    }, 
    []);

  return (
    <>
      <HeroSection />
      <BenefitSection />
      <ContactSection />
      <ProblemSolutionSection />
    </>
  )
}

export default HomeLayout