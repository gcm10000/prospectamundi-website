import React from 'react'
import ServicesLayout from './layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços | Prospecta Mundi',
  description: 'Potencialize suas vendas com nossos serviços: estratégias personalizadas, análise de funil, leads qualificados e especialistas em vendas.'
};

function Services() {
  return (
    <ServicesLayout></ServicesLayout>
  )
}

export default Services;