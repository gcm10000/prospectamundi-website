import React from 'react'
import PostLayout from './PostLayout';

export const dynamicParams = false;

export async function generateStaticParams() {
  //é para pegar apenas os slugs
  return [{slug: 'teste'}, {slug: 's'}];
}

function Post({ params: { slug } }: 
  { params: { slug: string } }) {
  return (
    <>
      <PostLayout />
    </>
  )
}

export default Post;
