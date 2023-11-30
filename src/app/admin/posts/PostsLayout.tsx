"use client"

import styles from './style.module.css';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import SubmitButton from '@/components/SubmitButton';
import ButtonWithDropdown, { DropdownButtonProps } from '@/components/ButtonWithDropdown';
import FormSearch from '@/components/FormSearch';
import { Chip, Pagination } from '@mui/material';
import AdminLayoutBase from '../AdminLayoutBase';
import GrayArea from '@/components/GrayArea';
import PersonalDataTable from '@/components/Admin/PersonalDataTable';
import { PostDto } from '@/interfaces/PostDto';
import postClient from '@/network/lib/postClient';
import { PaginatedList } from '@/interfaces/PaginatedList';
import useURLParams from '@/hooks/useURLParams';
import { router } from '@/services/redirectService';
import { messageService } from '@/services/messageService';
import currentUserService from '@/services/currentUserService';

function PostsLayout() {
    const userService = currentUserService();

    const nameSearchInput = 'searchInput';

    const searchParamName = 'search';
    const params = useURLParams();
    const searchValue = params[searchParamName] || '';
    const [searchQuery, setSearchQuery] = useState(searchValue);

    const pageParamName = 'page';
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page') || '1';
    const [searchPage, setSearchPage] = useState<number>(Number(pageParam));

    const [posts, setPosts] = useState<PaginatedList<PostDto>>({
        items: [],
        pageNumber: 0,
        totalCount: 0,
        totalPages: 0
    });


    useEffect(() => {
        getPosts();
    }, [searchQuery, searchPage]);

    async function getPosts() {
        const client = postClient();
        const result = await client.getAll({
            page: searchPage,
            pageSize: 10,
            query: searchQuery
        });

        const postsFromApi = result.data;
        setPosts(postsFromApi);
    }

    const dropdownButtons : DropdownButtonProps<PostDto>[] = [
        { text: 'Editar', condition: () => true,
            deleteflag: false,
            onClick: (id: string) => {
                router?.push(`/admin/posts/edit/?id=${id}`);
            } 
        },
        { text: 'Desabilitar', condition: (value) => !value.disabledAt,
            deleteflag: true,
                onClick: async (id) => {
                const client = postClient();
                await client.disable(id);
                await messageService.success("Postagem foi desabilitada com sucesso.");
                getPosts();
            } 
        },
        { text: 'Publicar', condition: (value) => !!value.disabledAt,
            deleteflag: false,
                onClick: async (id) => {
                const client = postClient();
                await client.enable(id);
                await messageService.success("Postagem foi publicada com sucesso.");
                getPosts();
            } 
        },
        { text: 'Remover', condition: () => true,
            deleteflag: true,
                onClick: async (id) => {
                const client = postClient();
                await client.delete(id);
                await messageService.success("Postagem foi removida com sucesso.");
                getPosts();
            } 
        }
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchInputValue = formData.get(nameSearchInput) as string;

        const url = new URL(window.location.href);
        url.searchParams.set(searchParamName, searchInputValue);
        url.searchParams.set('page', '1');
        window.history.pushState({}, '', url.toString());

        setSearchQuery(searchInputValue);
      }

      const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        const url = new URL(window.location.href);
        url.searchParams.set(pageParamName, page.toString());
        window.history.pushState({}, '', url.toString());

        setSearchPage(page);
      };

      const redirectToPost = (slug: string) => {
        // router?.push(`/blog/${slug}`);
        window.open(`/${slug}`, '_blank');
      };

  return (
    <>
        <AdminLayoutBase title='Gerenciar Postagens'>
            {
                userService.isUserAllowed(['Administrator', 'ContentCreator']) &&
                <GrayArea>
                    <SubmitButton to='./add' text='Adicionar Nova Postagem' />
                </GrayArea>
            }
            <article>
                <GrayArea style={{marginBottom: '60px'}}>
                    <FormSearch
                        placeHolder='Faça uma consulta...'
                        nameSearchInput={nameSearchInput}
                        handleSubmit={handleSubmit}
                    />
                </GrayArea>
                <Box sx={{ width: '100%' }}>
                    {/* <div style={{display: 'table', tableLayout: 'fixed', width: '100%'}}>

                    </div> */}
                    <PersonalDataTable> 
                      <thead>
                        <tr>
                          <th>Post</th>
                          <th>Autor</th>
                          <th>Criado Em</th>
                          <th>Publicado</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.items.map((x, index) =>
                        <tr style={{cursor: 'pointer'}} key={index}>
                            <td onClick={() => redirectToPost(x.slug)}>{x.title}</td>
                            <td onClick={() => redirectToPost(x.slug)}>{x.authorName}</td>
                            <td onClick={() => redirectToPost(x.slug)}>{x.createdAt}</td>
                            <td onClick={() => redirectToPost(x.slug)}>
                                <Chip label={(!x.disabledAt) ? 'Sim' : 'Não'} 
                                      color={!x.disabledAt ? 'success' : 'error'} 
                                      variant="outlined" 
                                />
                            </td>
                            <td style={{cursor: 'auto'}}>
                                <ButtonWithDropdown
                                    text='Ações'
                                    dropdownButtons={dropdownButtons}
                                    id={x.id}
                                    value={x}
                                />
                            </td>
                        </tr>
                            )}
                      </tbody>
                    </PersonalDataTable>
                </Box>
            </article>
            <div className={styles.paginationWrapper}>
                <Pagination count={posts.totalPages}
                            variant="outlined"
                            shape="rounded"
                            page={searchPage}
                            onChange={handlePageChange}
                />
            </div>
       </AdminLayoutBase>
    </>
  )
}

export default PostsLayout;
