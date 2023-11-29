"use client"

import React from 'react'
import PostsLayout from './PostsLayout';
import withAuthentication from '@/authentication/withAuthProtection';

function PostsClient() {
  return (
      <PostsLayout />
  )
}

export default withAuthentication(PostsClient, ['Root', 'Administrator', 'ContentCreator']);
