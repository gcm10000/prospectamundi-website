import React from 'react';
import LayoutBase from '../LayoutBlogBase';
import { PostDto } from '@/interfaces/PostDto';
import BlogContent from '@/components/BlogContent';
import { PaginatedList } from '@/interfaces/PaginatedList';
import { CategoryDto } from '@/interfaces/CategoryDto';


function PostLayout({ post, content, latestPosts, categories }: { 
    post: PostDto, 
    content: string,
    latestPosts: PaginatedList<PostDto>,
    categories: PaginatedList<CategoryDto>
}) {
      
  return (
    <LayoutBase latestPosts={latestPosts} categories={categories}>
        <BlogContent post={post} content={content} preview={false} />
    </LayoutBase>
  )
}

export default PostLayout;
