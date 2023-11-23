"use client"

import React, { useState } from 'react';
import { SidebarData } from './SiderbarData';
import './Navbar.css';

function SideNavigationBar() {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <nav className={sidebar ? 'vertical-nav-menu active' : 'vertical-nav-menu'}>
          <ul className='vertical-nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <div className='vertical-navbar-text'>{item.title}</div>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  )
}

export default SideNavigationBar
