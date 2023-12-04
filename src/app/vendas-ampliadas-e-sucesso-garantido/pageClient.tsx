"use client"

import Card1 from '@/components/Card1/Card1';
import DistributedContentHeroSection from '@/components/DistributedContainerHeroSection';
import SectionFullWidth from '@/components/SectionFullWidth/SectionFullWidth';
import setup from '@/components/Transictions/Transictions';
import { faLightbulb, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react'

function VendasAmpliadasSucessoGarantidoClient() {

    useEffect(() => {
        window.addEventListener("load", (event) => {
            // setup();
        });
        setup();
    }, 
    []);

  return (
    <>
        <DistributedContentHeroSection></DistributedContentHeroSection>
        <SectionFullWidth style={{backgroundColor: 'white'}}>
            <Card1 icon={faLightbulb} 
                   iconSize='medium'
                   title='Consultoria Especializada'
                   description='Expertise que Transforma - Orientação especializada para potencializar suas vendas.' 
                   style={{height: '270px'}}
            />
            <Card1 icon={faChartLine} 
                   iconSize='medium'
                   title='Análise Detalhada' 
                   description='Revelando Oportunidades - Identificamos detalhes que impulsionam suas vendas.'  
                   style={{height: '270px'}}
            />
            <Card1 icon={faCogs}
                   iconSize='medium' 
                   title='Estratégias Personalizadas' 
                   description='Soluções à Sua Medida - Estratégias adaptadas para o crescimento do seu negócio.'
                   style={{height: '270px'}}
            />
        </SectionFullWidth>
    </>
  )
}

export default VendasAmpliadasSucessoGarantidoClient;