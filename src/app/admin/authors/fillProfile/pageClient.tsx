"use client"

import React from 'react'
import AddOrEditAuthorLayout from '../AddOrEditAuthorLayout';
import withAuthentication from '@/authentication/withAuthProtection';

function FillAuthorProfileClient() {
  return (
    <AddOrEditAuthorLayout mode='fillProfile'></AddOrEditAuthorLayout>
  )
}

export default withAuthentication(FillAuthorProfileClient, ['Administrator', 'ContentCreator']);
