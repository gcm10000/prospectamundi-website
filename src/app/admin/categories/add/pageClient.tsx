"use client"

import React from 'react'
import withAuthentication from '@/authentication/withAuthProtection';
import AddOrEditCategoriesLayout from '../AddOrEditCategoriesLayout';

function CategoriesClient() {
  return (
      <AddOrEditCategoriesLayout mode='add' />
  )
}

export default withAuthentication(CategoriesClient, ['Root', 'Administrator', 'ContentCreator']);
