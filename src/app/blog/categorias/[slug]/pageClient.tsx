"use client"

import React from 'react'
import BlogLayout from '../../BlogLayout';
import { PaginatedList } from '@/interfaces/PaginatedList';
import { PostDto } from '@/interfaces/PostDto';
import { CategoryDto } from '@/interfaces/CategoryDto';

function CategoryClient({ paginatedPost, lastestPosts, categories }: { 
    paginatedPost: PaginatedList<PostDto>,
    lastestPosts: PaginatedList<PostDto>,
    categories: PaginatedList<CategoryDto>
}) {
  return (
    <BlogLayout 
        paginatedPost={paginatedPost} 
        lastestPosts={lastestPosts} 
        categories={categories} 
    />
  )
}

export default CategoryClient;
