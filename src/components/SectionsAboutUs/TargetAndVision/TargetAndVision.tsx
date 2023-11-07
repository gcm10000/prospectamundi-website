import {useEffect} from 'react';
import './TargetAndVision.css';
import SectionFullWidth from '../../SectionFullWidth/SectionFullWidth';
import CardAboutUs from '../CardAboutUs/CardAboutUs';
import { faBullseye, faBinoculars }  from '@fortawesome/free-solid-svg-icons';
import setup from '../../Transictions/Transictions';


function TargetAndVision() {
  return (
      <SectionFullWidth title='Meta e Visão'>
        <CardAboutUs className='slide-in from-left' icon={faBullseye} title='Meta' description='Nossa missão é oferecer soluções inovadoras e de qualidade para nossos clientes, contribuindo para o sucesso de seus negócios e para o desenvolvimento da sociedade.'></CardAboutUs>
        <CardAboutUs className='slide-in from-right' icon={faBinoculars} title='Visão' description='Nossa visão é ser reconhecida como uma empresa líder em inovação e excelência, contribuindo para o crescimento e desenvolvimento de nossos clientes, colaboradores e da sociedade como um todo.'></CardAboutUs>
      </SectionFullWidth>
  )
}

export default TargetAndVision
