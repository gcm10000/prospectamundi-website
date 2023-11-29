import React from 'react'
import { PostDto } from '@/interfaces/PostDto';
import { PaginatedList } from '@/interfaces/PaginatedList';
import CategoryClient from './pageClient';
import { getCategories, getLastestPosts, getPageNumber, getQuery } from '@/network/serverSideClient';

async function getPostsByCategorySlug(page: number, pageSize: number, slug: string) {
  const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL_API;
  const endPointPost = baseURL + `blog/Category/GetPostsByCategorySlug/${slug}`;
  const params = new URLSearchParams();

  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());
  
  const urlWithParams = `${endPointPost}?${params.toString()}`;

  const response = await fetch(urlWithParams, { cache: 'no-store' });
  const result : PaginatedList<PostDto> = await response.json();
  return result;
}

async function Category({ params: { slug }, searchParams }: { 
    params: { slug: string },
    searchParams?: { [key: string]: string | string[] | undefined };
 }) {

  const posts = await getPostsByCategorySlug(getPageNumber(searchParams), 10, slug);

  const lastestPosts = await getLastestPosts();
  const categories = await getCategories();
  
  return (
    <CategoryClient 
        paginatedPost={posts}
        lastestPosts={lastestPosts}
        categories={categories} 
    />
  )
}

export default Category;
