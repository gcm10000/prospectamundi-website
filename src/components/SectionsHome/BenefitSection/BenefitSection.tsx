"use client"

import './BenefitSection.css';
import { faChartLine, faPuzzlePiece, faDollarSign }  from '@fortawesome/free-solid-svg-icons';
import SectionFullWidth from '../../SectionFullWidth/SectionFullWidth';
import Card1 from '../../Card1/Card1';

function BenefitSection() {
  return (
        <SectionFullWidth>
            <Card1 icon={faChartLine} 
              title='Aumento nas Taxas de Conversão'
              description='Ajudamos a otimizar seus processos de pré-vendas para aumentar as taxas de conversão, transformando leads em clientes reais.'  />
            <Card1 icon={faPuzzlePiece} 
              title='Estratégias Personalizadas' 
              description='Desenvolvemos estratégias de pré-vendas sob medida para atender às necessidades específicas do seu negócio.'  />
            <Card1 icon={faDollarSign} 
              title='Aumento nas Taxas de Conversão' 
              description='Nossas estratégias eficazes de pré-vendas contribuem diretamente para o aumento da receita da sua empresa.'  />
        </SectionFullWidth>
  )
}

export default BenefitSection;
