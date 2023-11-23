"use client"

import styles from './style.module.css';
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import SubmitButton from '@/components/SubmitButton';
import ButtonWithDropdown, { ButtonWithDropdownProps } from '@/components/ButtonWithDropdown';
import FormSearch from '@/components/FormSearch';
import { Pagination } from '@mui/material';
import AdminLayoutBase from '../AdminLayoutBase';
import GrayArea from '@/components/GrayArea';
import PersonalDataTable from '@/components/Admin/PersonalDataTable';
import { withAuthProtection } from '@/authentication/withAuthProtection';

function PostsLayout() {

    const posts : {
        postName : string,
        authorName : string,
        createdAt : string,
        id: string
    }[] = [
        {
            postName: 'Postagem número 1',
            authorName: 'Gabriel Machado',
            createdAt: '01/01/2001 12H00',
            id: '1'
        },
        {
            postName: 'Postagem número 2',
            authorName: 'Gabriel Machado',
            createdAt: '01/01/2001 12H00',
            id: '2'
        },
        {
            postName: 'Postagem número 3',
            authorName: 'Gabriel Machado',
            createdAt: '01/01/2001 12H00',
            id: '3'
        },
        {
            postName: 'Postagem número 4',
            authorName: 'Gabriel Machado',
            createdAt: '01/01/2001 12H00',
            id: '4'
        },
        {
            postName: 'Postagem número 5',
            authorName: 'Gabriel Machado',
            createdAt: '01/01/2001 12H00',
            id: '5'
        },
        {
            postName: 'Postagem número 6',
            authorName: 'Gabriel Machado',
            createdAt: '01/01/2001 12H00',
            id: '6'
        },
        {
            postName: 'Postagem número 7',
            authorName: 'Gabriel Machado',
            createdAt: '01/01/2001 12H00',
            id: '7'
        },
        {
            postName: 'Postagem número 8',
            authorName: 'Gabriel Machado',
            createdAt: '01/01/2001 12H00',
            id: '8'
        },
        {
            postName: 'Postagem número 9',
            authorName: 'Gabriel Machado',
            createdAt: '01/01/2001 12H00',
            id: '9'
        },
        {
            postName: 'Postagem número 10',
            authorName: 'Gabriel Machado',
            createdAt: '01/01/2001 12H00',
            id: '10'
        }
    ];

    const dropdownButtons : ButtonWithDropdownProps[] = [
        { text: 'Editar', onClick: (id) => {
            alert('editar ' + id);
        } },
        { text: 'Remover', deleteFlag: true, onClick: (id) => {
            alert('remover ' + id);
        } }
    ];

  return (
    <>
        <AdminLayoutBase title='Gerenciar Postagem'>
            <GrayArea>
                <SubmitButton to='./add' text='Adicionar Nova Postagem'  />
            </GrayArea>
            <article>
                <GrayArea style={{marginBottom: '60px'}}>
                    <FormSearch
                        placeHolder='Faça uma consulta...'
                        nameSearchInput='search' 
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
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map(x => 
                        <tr className={styles.personalDataTableTr}>
                            <td>{x.postName}</td>
                            <td>{x.authorName}</td>
                            <td>{x.createdAt}</td>
                            <td>
                                <ButtonWithDropdown 
                                    text='Ações'
                                    dropdownButtons={dropdownButtons}
                                    id={x.id}
                                />
                            </td>
                        </tr>
                            )}
                      </tbody>
                    </PersonalDataTable>
                </Box>
            </article>
            <div className={styles.paginationWrapper}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
       </AdminLayoutBase>
    </>
  )
}

export default PostsLayout;
