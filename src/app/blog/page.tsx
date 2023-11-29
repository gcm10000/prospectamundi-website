"use server"

import React from 'react'
import BlogLayout from './BlogLayout';
import { getCategories, getLastestPosts, getPageNumber, getPosts, getQuery } from '@/network/serverSideClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Prospecta Mundi',
  description: 'Desvende insights e novidades em nosso blog. Descubra conteúdos que expandem horizontes e oferecem inspiração para a sua área comercial.'
};

async function Blog({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const query = getQuery(searchParams);
  const posts = await getPosts(getPageNumber(searchParams), 10, query);
  const lastestPosts = await getLastestPosts();
  const categories = await getCategories();

  return (
    <>
        <BlogLayout paginatedPost={posts} lastestPosts={lastestPosts} categories={categories} />
    </>
  )
}

export default Blog;
