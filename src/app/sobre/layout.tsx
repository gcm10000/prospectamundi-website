"use client"

import { Button } from '@/components/Button';
import SectionWithBlur, { Position } from '@/components/SectionWithBlur/SectionWithBlur';
import OurValues from '@/components/SectionsAboutUs/OurValues/OurValues';
import TargetAndVision from '@/components/SectionsAboutUs/TargetAndVision/TargetAndVision';
import setup from '@/components/Transictions/Transictions';
import React, { useEffect } from 'react';
import '@/components/HeroSection.css';
import '@/components/SectionsContact/HeroSectionContact.css'

function AboutLayout() {
    useEffect(() => {
        setup();
    }, 
    []);
  return (
    <div>
      <div className='hero-container aboutus'>
        <header className="contact--content">
          <SectionWithBlur 
            title='Temos em Primeira Mão a Solução para as Dores da Jornada de Vendas' 
            position={Position.Left}>
            <p style={{lineHeight: '1.9rem'}}>A Prospecta Mundi, uma consultoria especializada em pré-vendas, tem como missão oferecer sua vasta expertise em pré-vendas, empregando as mais eficazes práticas e metodologias comprovadas. Nossa estratégia visa à identificação de leads qualificados de alta qualidade, permitindo-nos alcançar resultados concretos e otimizar o potencial de vendas da sua empresa.</p>
            <p style={{marginTop: '30px'}}>
                <Button
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  to="/contato"
                >
                  ENTRE EM CONTATO
                </Button>
              </p>
          </SectionWithBlur>
          <div></div>
        </header>
      </div>
      <TargetAndVision />
      <OurValues />
    </div>
  )
}

export default AboutLayout;