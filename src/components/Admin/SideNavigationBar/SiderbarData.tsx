import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faUsers, faFolder } from '@fortawesome/free-solid-svg-icons';

export const SidebarData = [
  {
    title: 'Gerenciar Postagens',
    path: '/admin/posts',
    icon: <FontAwesomeIcon icon={faFileAlt} />,
    cName: 'vertical-nav-text'
  },
  {
    title: 'Gerenciar Autores',
    path: '/admin/authors',
    icon: <FontAwesomeIcon icon={faUsers} />,
    cName: 'vertical-nav-text'
  },
  {
    title: 'Gerenciar Usuários',
    path: '/admin/users',
    icon: <FontAwesomeIcon icon={faUsers} />,
    cName: 'vertical-nav-text'
  },
  // {
  //   title: 'Gerenciar Categorias',
  //   path: '/products',
  //   icon: <FontAwesomeIcon icon={faFolder} />,
  //   cName: 'vertical-nav-text'
  // }
];