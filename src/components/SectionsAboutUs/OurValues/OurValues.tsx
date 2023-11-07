import React from 'react';
import './OurValues.css'
import SectionFullWidth from '../../SectionFullWidth/SectionFullWidth';
import CardAboutUs from '../CardAboutUs/CardAboutUs';
import { faShield, faLightbulb, faStar } from '@fortawesome/free-solid-svg-icons';

function OurValues() {

  return (
    <div>
      <SectionFullWidth className='fade-in' style={{background: 'white'}} title='Nossos Valores'>
        <CardAboutUs icon={faShield} title='Integridade' description='Acreditamos na importância de ser transparente e ético em todas as nossas ações e decisões.'></CardAboutUs>
        <CardAboutUs icon={faLightbulb} title='Inovação' description='Buscamos sempre encontrar soluções inovadoras e criativas para superar desafios e alcançar nossos objetivos.'></CardAboutUs>
        <CardAboutUs icon={faStar} title='Excelência' description='Trabalhamos incansavelmente para entregar resultados excepcionais aos nossos clientes e colaboradores.'></CardAboutUs>
      </SectionFullWidth>
    </div>
  )
}

export default OurValues
