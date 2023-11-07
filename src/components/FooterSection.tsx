"use client"

import React from 'react'
import './FooterSection.css'
import { Telephone, Envelope, HandThumbsUp, Facebook, Linkedin, Instagram  } from 'react-bootstrap-icons'

function FooterSection() {
  return (
    <footer>
        <div className="footer-mainContent">
            <a href="/">
                <img src="../images/logo-b.png" alt='Prospecta Mundi' className="footer-Logo" />
            </a>
            <div className="footer-contactContent">
                <h1>Contato</h1>
                <div className="footer-contacts">
                    <div className="footer-contact">
                        <Telephone></Telephone>
                        <a href="https://wa.link/13wirx">+55 21 96528-8502</a>
                    </div>
                    <div className="footer-contact">
                        <Envelope></Envelope>
                        <a href="malto:contato@prospectamundi.com">contato@prospectamundi.com</a>
                    </div>
                    <div className="footer-contact">
                        <HandThumbsUp></HandThumbsUp>
                        <div className="footer-contact-socialMedia">
                            <a href="https://www.facebook.com/profile.php?id=61552189875791&mibextid=ZbWKwL">
                                <Facebook></Facebook>
                            </a>
                            <a href="https://www.linkedin.com/company/prospecta-mundi/">
                                <Linkedin></Linkedin>
                            </a>
                            <a href="https://instagram.com/prospectamundi?igshid=NjIwNzIyMDk2Mg==">
                                <Instagram></Instagram>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <p className="copyright">
            &copy; Prospecta Mundi. Todos os direitos resevados.
        </p>
    </footer>
  )
}

export default FooterSection;
