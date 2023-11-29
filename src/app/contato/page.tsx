import React from 'react'
import ContactLayout from './layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato | Prospecta Mundi',
  description: 'Entre em contato e envie sua mensagem pelo formulário e logo entraremos em contato. Qualquer dúvida estamos a disposição pelo email ou telefone.'
};

function Contact() {
  return (
    <>
      <ContactLayout></ContactLayout>
    </>
  )
}

export default Contact;