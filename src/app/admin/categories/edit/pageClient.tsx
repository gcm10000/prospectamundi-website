"use client"

import React from 'react'
import withAuthentication from '@/authentication/withAuthProtection';
import AddOrEditCategoriesLayout from '../AddOrEditCategoriesLayout';

function EditCategoriesClient() {
  return (
      <AddOrEditCategoriesLayout mode='edit' />
  )
}

export default withAuthentication(EditCategoriesClient, ['Root', 'Administrator', 'ContentCreator']);
