"use client"

import React from 'react';
import AdminLayoutBase from '../AdminLayoutBase';
import GrayArea from '@/components/GrayArea';
import SubmitButton from '@/components/SubmitButton';
import FormSearch from '@/components/FormSearch';
import { Box, Pagination } from '@mui/material';
import PersonalDataTable from '@/components/Admin/PersonalDataTable';
import ButtonWithDropdown, { ButtonWithDropdownProps } from '@/components/ButtonWithDropdown';

function UsersLayout() {

    const authors = [{
        Id: '1',
        FirstName: 'Gabriel',
        LastName: 'Machado',
        CreatedAt: '01/01/2001 12H00',
        Bio: '',
        ProfileImageUrl: ''
    },
    {
        Id: '2',
        FirstName: 'Samantha',
        LastName: 'Sepulveda',
        CreatedAt: '01/01/2001 12H00',
        Bio: '',
        ProfileImageUrl: ''
    },
    {
        Id: '3',
        FirstName: 'Fulano',
        LastName: 'Da Silva',
        CreatedAt: '01/01/2001 12H00',
        Bio: '',
        ProfileImageUrl: ''
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
    <AdminLayoutBase title='Gerenciar Usuários'>
        <GrayArea>
                <SubmitButton to='./add' text='Adicionar Novo Usuário' />
        </GrayArea>
        <article>
                <GrayArea style={{marginBottom: '60px'}}>
                    <FormSearch
                        placeHolder='Faça uma consulta...'
                        nameSearchInput='search' 
                    />
                </GrayArea>
                <Box sx={{ width: '100%' }}>
                    <PersonalDataTable>
                      <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Criado Em</th>
                        </tr>
                      </thead>
                      <tbody>
                        {authors.map(x => 
                        <tr>
                            <td>{x.FirstName} {x.LastName}</td>
                            <td>{x.CreatedAt}</td>
                            <td>
                                <ButtonWithDropdown 
                                    text='Ações'
                                    dropdownButtons={dropdownButtons}
                                    id={x.Id}
                                />
                            </td>
                        </tr>
                            )}
                      </tbody>
                    </PersonalDataTable>
                </Box>
            </article>
            <div style={{
                marginLeft: 'auto',
                marginRight: '60px'
            }}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
    </AdminLayoutBase>
  )
}

export default UsersLayout
