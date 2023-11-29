"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars }  from '@fortawesome/free-solid-svg-icons';
import ChipWithDropdown, { DropdownButtonProps } from '../ChipWithDropdown';
import { AuthService } from '@/services/authService';
import { AuthorDto } from '@/interfaces/AuthorDto';

function Navbar() {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [author, setAuthor] = useState<AuthorDto | null>(null);

  useEffect(()=>{
    const gettedAuthor = AuthService.getProfile();
    setAuthor(gettedAuthor);
  }, []);

  const firstName = author?.firstName;
  const imageURL = author?.profileImageUrl;

  const dropdownButtons : DropdownButtonProps[] = [
    { 
      text: 'Dashboard',
      deleteflag: false,
      onClick: () => {
          location.href = '/admin/posts';
      } 
    },
    { 
      text: 'Logout',
      deleteflag: true,
      onClick: () => {
          AuthService.logout();
          location.reload();
      } 
    },
  ];
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
            &nbsp;
            <img src="/images/logo.png" alt='Prospecta Mundi' className='navbar--imglogo' />
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
                href='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
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
            { author && <li className='nav-item'>
                  <div style={{ display: 'flex',
                      height: '100%',
                      flexWrap: 'wrap',
                      alignContent: 'center',
                      justifyContent: 'center'
                    }}>
                    <ChipWithDropdown 
                        label={firstName}
                        srcURL={imageURL}
                        dropdownButtons={dropdownButtons}
                    />
                  </div>
            </li> }
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