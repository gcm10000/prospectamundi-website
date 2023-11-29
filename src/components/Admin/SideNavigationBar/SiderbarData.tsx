import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import RoleConstrants from '@/constrants/RoleConstrants';
import { Role } from '@/interfaces/Role';

export interface SidebarDataProps {
  title: string,
  path: string,
  icon: React.JSX.Element,
  cName: string,
  allowedRoles: Role
}

export const SidebarData = [
  {
    title: 'Gerenciar Postagens',
    path: '/admin/posts',
    icon: <FontAwesomeIcon icon={faFileAlt} />,
    cName: 'vertical-nav-text',
    allowedRoles: [RoleConstrants.root, RoleConstrants.administrator, RoleConstrants.contentCreator]
  },
  {
    title: 'Gerenciar Usuários',
    path: '/admin/users',
    icon: <FontAwesomeIcon icon={faUsers} />,
    cName: 'vertical-nav-text',
    allowedRoles: [RoleConstrants.root, RoleConstrants.administrator]
  },
  {
    title: 'Gerenciar Categorias',
    path: '/admin/categories',
    icon: <FontAwesomeIcon icon={faUsers} />,
    cName: 'vertical-nav-text',
    allowedRoles: [RoleConstrants.administrator, RoleConstrants.contentCreator]
  },
  {
    title: 'Editar seu Perfil',
    path: '/admin/authors/editOwnProfile',
    icon: <FontAwesomeIcon icon={faUsers} />,
    cName: 'vertical-nav-text',
    allowedRoles: [RoleConstrants.administrator, RoleConstrants.contentCreator]
  }
];