"use client"

import React from 'react'
import './ProblemSolutionSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheckCircle }  from '@fortawesome/free-solid-svg-icons';

function ProblemSolutionSection() {
  return (
    <section className='problemSolution'>
      <div style={{display: 'flex', flexDirection: 'column', gap: '7em'}}>
        <h1 style={{textAlign: 'center', fontSize: '3.2rem', fontWeight: '200'}}>Transformamos Desafios em Oportunidades</h1>
        <div className='problemSolution--content'>
            <FontAwesomeIcon icon={faBan} style={{color: 'red', fontSize: '7.5em'}} className='slide-in from-left' />
            <div className='problemSolution--content--text slide-in from-right'>
                <h2>Desafios de Pré-Vendas</h2>
                <h4>Muitas empresas enfrentam desafios significativos no processo de pré-vendas. Alguns dos problemas mais comuns incluem:</h4>
                <ul>
                    <li>
                        Dificuldade em identificar leads de alta qualidade.
                    </li>
                    <li>
                        Baixas taxas de conversão de leads em clientes.
                    </li>
                    <li>
                        Falta de estratégias personalizadas para atender às necessidades de cada cliente.
                    </li>
                </ul>
            </div>
        </div>
        <div className='problemSolution--content problemSolution--content--solution'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: 'green', fontSize: '7.5em', }} className='slide-in from-right' />
            <div className='problemSolution--content--text slide-in from-left'>
                <h2>Como Podemos Ajudar</h2>
                <h4>Nossa consultoria de pré-vendas oferece soluções sob medida para enfrentar esses desafios. Com nossa expertise e abordagem personalizada, ajudamos a superar esses obstáculos de forma eficaz.</h4>
                <ul>
                    <li>
                        Aumento nas taxas de conversão, transformando leads em clientes satisfeitos.
                    </li>
                    <li>
                        Desenvolvimento de estratégias de pré-vendas adaptadas às necessidades exclusivas do seu negócio.
                    </li>
                    <li>
                        Melhoria nas receitas e no desempenho geral das vendas.
                    </li>
                </ul>
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default ProblemSolutionSection
