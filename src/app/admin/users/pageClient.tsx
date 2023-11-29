"use client"

import React from 'react'
import UsersLayout from './UsersLayout';
import withAuthentication from '@/authentication/withAuthProtection';

function UsersClient() {
  return (
    <UsersLayout />
  )
}

export default withAuthentication(UsersClient, ['Root', 'Administrator']);
