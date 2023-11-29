import React from 'react'
import PostLayout from './PostLayout';
import { PostDto } from '@/interfaces/PostDto';
import draftToHtml from 'draftjs-to-html';
import { getCategories, getLastestPosts } from '@/network/serverSideClient';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL_API_SERVER_SIDE;
  
  const endpointSlugs = baseURL + "blog/Post/GetPostSlugs";
  
  const response = await fetch(endpointSlugs, { cache: 'no-store' });
  const data : string[] = await response.json();
  return data;
}

async function getPost(slug: string) {
  const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL_API_SERVER_SIDE;
  const endPointPost = baseURL + "blog/Post/" + slug;
  const response = await fetch(endPointPost, { cache: 'no-store' });
  const post : PostDto = await response.json();

  return post;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
 
  const post = await getPost(slug);
  const appBaseURL = process.env.NEXT_PUBLIC_APP_BASE_URL;

  const pageTitle = post.title + " | Prospecta Mundi";
  return {
    title: pageTitle,
    description: post.summaryContent,
    category: post.categories[0].name,
    authors: { name: post.authorName },
    keywords: post.tags,
    openGraph: {
      images: [post.imageURL],
      title: pageTitle,
      description: post.summaryContent,
      type: 'article',
      locale: 'pt_BR',
      url: `${appBaseURL}${slug}`
    },
  }
}

async function Post({ params: { slug }, searchParams }: Props) {

    const post = await getPost(slug);
    const rawContentState = JSON.parse(post.content);
    const html = draftToHtml(rawContentState);

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
