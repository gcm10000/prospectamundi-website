"use client"

import React from 'react';
import AddOrEditPostLayout from '../AddOrEditPostsLayout';
import withAuthentication from '@/authentication/withAuthProtection';

function AddPostClient() {
  return (
    <AddOrEditPostLayout mode='add' />
  )
}

export default withAuthentication(AddPostClient, ['Administrator', 'ContentCreator']);
