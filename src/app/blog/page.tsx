"use server"

import React from 'react'
import BlogLayout from './BlogLayout';
import { getCategories, getLastestPosts, getPageNumber, getPosts, getQuery } from '@/network/serverSideClient';


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
