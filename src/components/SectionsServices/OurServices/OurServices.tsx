import React from 'react';
import './OurServices.css';
import SectionFullWidth from '../../SectionFullWidth/SectionFullWidth';
import Card1, { Card1Props } from '../../Card1/Card1';
import { faBullseye, faFunnelDollar, faCheck, faPeopleGroup }  from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../Button';

export interface OurServicesProps {
  reff: any;
}

function OurServices({ reff }: OurServicesProps) {
 

  function cardButtonFactory(index: number) {
    const cardButton = <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Button
                              buttonStyle='form--submit'
                              buttonSize='btn--large'
                              to={`/contato?q=${index}`}
                            >
                              Agendar Agora
                            </Button>
                       </div>;

    return cardButton;
  }

const card1Array : Card1Props[] = [
    {
      icon: faBullseye,
      title: 'Estratégias de Vendas',
      description: 'Estratégias personalizadas para impulsionar suas vendas.',
      footer: cardButtonFactory(0)
    },
    {
      icon: faFunnelDollar,
      title: 'Análise de Funil de Vendas',
      description: 'Como esse serviço pode economizar tempo e recursos.',
      footer: cardButtonFactory(1)
    },
    {
      icon: faCheck,
      title: 'Qualificação de Leads',
      description: 'Descrição detalhada do serviço de qualificação de leads. Como esse serviço pode economizar tempo e recursos.',
      footer: cardButtonFactory(2)
    },
    {
      icon: faPeopleGroup,
      title: 'Banco de talentos de SDR',
      description: 'Encontre aqui um profissional de vendas qualificado e treinado com nossas metodologias.',
      footer: cardButtonFactory(3)
    }
  ];

  return (
    <SectionFullWidth id='servicesSection' style={{background: 'white'}} title='Nossos Serviços' reff={reff}>
        {
          card1Array.map((x, index) => (
            <Card1 icon={x.icon}
                   title={x.title}
                   description={x.description}
                   footer={x.footer}
                   key={index} />
          ))
        }
    </SectionFullWidth>
  );
}

export default OurServices;
