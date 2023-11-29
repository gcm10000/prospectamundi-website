"use client"

import React from 'react'
import AddOrEditUserLayout from '../AddOrEditAuthorLayout';
import withAuthentication from '@/authentication/withAuthProtection';

function EditProfileClient() {
  return (
    <AddOrEditUserLayout mode='editProfile'></AddOrEditUserLayout>
  )
}

export default withAuthentication(EditProfileClient, ['Root','Administrator']);
