"use client"

import React from 'react'
import AddOrEditAuthorLayout from '../AddOrEditAuthorLayout';
import withAuthentication from '@/authentication/withAuthProtection';

function EditUserClient() {
  return (
    <AddOrEditAuthorLayout mode='editOwnProfile'></AddOrEditAuthorLayout>
  )
}

export default withAuthentication(EditUserClient, ['Administrator', 'ContentCreator']);
