"use client"

import CardBlog, { CardBlogProps } from '@/components/CardBlog';
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { TablePagination } from '@mui/material';
import LayoutBase from './LayoutBase';

function BlogLayout() {
    const count = 100;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [data, setData] = useState<CardBlogProps[]>([]);


    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        
      };

      useEffect(() => {
        const array : CardBlogProps[] = [{
            imgSrc: 'https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400',
            title: 'Postagem do Blog numero 1' + page,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Phasellus egestas tellus rutrum tellus pellentesque eu. Consequat interdum varius sit amet mattis. Faucibus interdum posuere lorem ipsum dolor sit amet...',
            author: 'Samantha Sepulveda'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400',
            title: 'Postagem do Blog numero 2' + page,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Phasellus egestas tellus rutrum tellus pellentesque eu. Consequat interdum varius sit amet mattis. Faucibus interdum posuere lorem ipsum dolor sit amet...',
            author: 'Samantha Sepulveda'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400',
            title: 'Postagem do Blog numero 3' + page,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Phasellus egestas tellus rutrum tellus pellentesque eu. Consequat interdum varius sit amet mattis. Faucibus interdum posuere lorem ipsum dolor sit amet...',
            author: 'Samantha Sepulveda'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400',
            title: 'Postagem do Blog numero 4' + page,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Phasellus egestas tellus rutrum tellus pellentesque eu. Consequat interdum varius sit amet mattis. Faucibus interdum posuere lorem ipsum dolor sit amet...',
            author: 'Samantha Sepulveda'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400',
            title: 'Postagem do Blog numero 5' + page,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Phasellus egestas tellus rutrum tellus pellentesque eu. Consequat interdum varius sit amet mattis. Faucibus interdum posuere lorem ipsum dolor sit amet...',
            author: 'Samantha Sepulveda'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400',
            title: 'Postagem do Blog numero 6' + page,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Phasellus egestas tellus rutrum tellus pellentesque eu. Consequat interdum varius sit amet mattis. Faucibus interdum posuere lorem ipsum dolor sit amet...',
            author: 'Samantha Sepulveda'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400',
            title: 'Postagem do Blog numero 7' + page,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Phasellus egestas tellus rutrum tellus pellentesque eu. Consequat interdum varius sit amet mattis. Faucibus interdum posuere lorem ipsum dolor sit amet...',
            author: 'Samantha Sepulveda'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400',
            title: 'Postagem do Blog numero 8' + page,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Phasellus egestas tellus rutrum tellus pellentesque eu. Consequat interdum varius sit amet mattis. Faucibus interdum posuere lorem ipsum dolor sit amet...',
            author: 'Samantha Sepulveda'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400',
            title: 'Postagem do Blog numero 9' + page,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Phasellus egestas tellus rutrum tellus pellentesque eu. Consequat interdum varius sit amet mattis. Faucibus interdum posuere lorem ipsum dolor sit amet...',
            author: 'Samantha Sepulveda'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400',
            title: 'Postagem do Blog numero 10' + page,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Phasellus egestas tellus rutrum tellus pellentesque eu. Consequat interdum varius sit amet mattis. Faucibus interdum posuere lorem ipsum dolor sit amet...',
            author: 'Samantha Sepulveda'
        }];
        setData(array);
      }, [page, rowsPerPage]);

  return (
    <LayoutBase>
        <div className={styles.blogListWithPagination}>
            <div className={styles.blogList}>
                <h2 className={styles.blogTitle}>Confira Nossos Artigos</h2>
                <div className={styles.blogListContent}>
                    {data.map((x) => 
                        <CardBlog 
                            imgSrc={x.imgSrc}
                            title={x.title}
                            description={x.description}
                            author={x.author} />
                    )}
                </div>
                <div style={{margin: '0 auto'}}>
                    <TablePagination
                        component="div"
                        count={count}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        labelRowsPerPage="Linhas por página:"
                        labelDisplayedRows={({ from, to, count }) => `Exibindo ${from}-${to} de ${count}`}
                        rowsPerPageOptions={[10, 20]}
                    />
                </div>
            </div>
        </div>
    </LayoutBase>
  )
}

export default BlogLayout;
