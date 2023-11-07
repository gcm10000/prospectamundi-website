"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars }  from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
            &nbsp;
            <img src="../images/logo.png" alt='Prospecta Mundi' className='navbar--imglogo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon style={{color: 'white'}} icon={click ? faTimes : faBars} />
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link href='/sobre' className='nav-links' onClick={closeMobileMenu}>
                Sobre
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='/servicos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Serviços
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='/contato'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contato
              </Link>
            </li>

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;