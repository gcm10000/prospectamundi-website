"use client"

import React from 'react'
import withAuthentication from '@/authentication/withAuthProtection';
import CategoriesLayout from './CategoriesLayout';

function CategoriesClient() {
  return (
      <CategoriesLayout />
  )
}

export default withAuthentication(CategoriesClient, ['Root', 'Administrator', 'ContentCreator']);
