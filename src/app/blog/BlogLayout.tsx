"use client"

import CardBlog, { CardBlogProps } from '@/components/CardBlog';
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import LayoutBase from './LayoutBlogBase';
import { PostDto } from '@/interfaces/PostDto';
import { PaginatedList } from '@/interfaces/PaginatedList';
import { Pagination } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { CategoryDto } from '@/interfaces/CategoryDto';

function BlogLayout({ paginatedPost, lastestPosts, categories } : { 
    paginatedPost : PaginatedList<PostDto>,
    lastestPosts: PaginatedList<PostDto>,
    categories: PaginatedList<CategoryDto>
}) {
    const pageParamName = 'page';
    const count = paginatedPost.totalCount;
    const searchParams = useSearchParams();
    const pageParam = searchParams.get(pageParamName);

    const [searchPage, setSearchPage] = useState(Number(pageParam || '1'));
    
    const data : CardBlogProps[] = paginatedPost.items
            .map(x => ({
                title: x.title,
                to: "/" +  x.slug,
                author: x.authorName,
                description: x.summaryContent,
                imgSrc: x.imageURL,
            }));

            console.log(data);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setSearchPage(page);

        const url = new URL(window.location.href);
        url.searchParams.set(pageParamName, page.toString());
        window.location.href = url.toString();
      };

  return (
    <LayoutBase categories={categories} latestPosts={lastestPosts}>
        <div className={styles.blogListWithPagination}>
            <div className={styles.blogList}>
                <h2 className={styles.blogTitle}>Confira Nossos Artigos</h2>
                <div className={styles.blogListContent}>
                    {data.map((x, index) => 
                        <CardBlog 
                            key={index}
                            imgSrc={x.imgSrc}
                            title={x.title}
                            description={x.description}
                            author={x.author}
                            to={x.to} />
                    )}
                </div>
                {count == 0 && <h2 style={{color: 'red'}}>Resultados não encontrados</h2>}
                {
                    count > 0 &&
                    <div style={{margin: '0 auto'}}>
                        <Pagination count={paginatedPost.totalPages}
                                    variant="outlined"
                                    shape="rounded"
                                    page={searchPage}
                                    onChange={handlePageChange}
                        />
                    </div>
                }
            </div>
        </div>
    </LayoutBase>
  )
}

export default BlogLayout;
