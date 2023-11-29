"use client"

import React from 'react';
import './ContactSection.css'
import { Button } from '../../Button';



function ContactSection({ headline, to, buttonText } : { 
  headline: string,
  to: string,
  buttonText?: string | undefined }) {
  return (
    <section className='home--contactSection'>
        <div className='fade-in'>
            <h2>{headline}</h2>
        <Button
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            to={to}
            >
            { buttonText || 'Entre em Contato' }
            </Button>
        </div>
    </section>
  )
}

export default ContactSection;
