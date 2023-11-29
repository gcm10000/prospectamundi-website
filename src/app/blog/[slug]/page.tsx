import React from 'react'
import PostLayout from './PostLayout';
import { PostDto } from '@/interfaces/PostDto';
import draftToHtml from 'draftjs-to-html';
import { getCategories, getLastestPosts, getQuery } from '@/network/serverSideClient';

export const dynamicParams = false;

export async function generateStaticParams() {
  const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL_API;
  
  const endpointSlugs = baseURL + "blog/Post/GetPostSlugs";
  
  const response = await fetch(endpointSlugs, { cache: 'no-store' });
  const data : string[] = await response.json();
  return data;
}

export async function getPosts(slug: string) {
  const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL_API;
  const endPointPost = baseURL + "blog/Post/" + slug;
  const response = await fetch(endPointPost, { cache: 'no-store' });
  const post : PostDto = await response.json();

  return post;
}


async function Post({ params: { slug },
  searchParams }: 
  { params: { slug: string },
    searchParams?: { [key: string]: string | string[] | undefined }; }) {

    const post = await getPosts(slug);
    const rawContentState = JSON.parse(post.content);
    const html = draftToHtml(rawContentState);

    const query = getQuery(searchParams);
    //const posts = await getPosts(getPageNumber(searchParams), 10, query);
    const lastestPosts = await getLastestPosts();
    const categories = await getCategories();

    return (
        <PostLayout 
            post={post} 
            content={html} 
            latestPosts={lastestPosts}
            categories={categories}
        />
  )
}

export default Post;
