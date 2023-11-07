"use client"

import React from 'react';
import './ContactSection.css'
import { Button } from '../../Button';

function ContactSection() {
  return (
    <section className='home--contactSection'>
        <div className='fade-in'>
            <h2>Se deseja maiores informações sobre nossos recursos, entre em contato agora mesmo.</h2>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            to="/contato"
            >
            Entre em Contato
            </Button>
        </div>
    </section>
  )
}

export default ContactSection;
