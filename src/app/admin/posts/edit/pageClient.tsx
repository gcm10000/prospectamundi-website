"use client"

import React from 'react';
import AddOrEditPostLayout from '../AddOrEditPostsLayout';
import withAuthentication from '@/authentication/withAuthProtection';

function EditPostClient() {
  return (
    <AddOrEditPostLayout mode='edit' />
  )
}

export default withAuthentication(EditPostClient, ['Administrator', 'ContentCreator']);