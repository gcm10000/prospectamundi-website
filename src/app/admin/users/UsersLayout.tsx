"use client"

import React, { useEffect, useState } from 'react';
import AdminLayoutBase from '../AdminLayoutBase';
import GrayArea from '@/components/GrayArea';
import SubmitButton from '@/components/SubmitButton';
import FormSearch from '@/components/FormSearch';
import { Box } from '@mui/material';
import PersonalDataTable from '@/components/Admin/PersonalDataTable';
import ButtonWithDropdown, { DropdownButtonProps } from '@/components/ButtonWithDropdown';
import accountClient from '@/network/lib/accountClient';
import { UserDto } from '@/interfaces/UserDto';
import useURLParams from '@/hooks/useURLParams';
import { messageService } from '@/services/messageService';
import { router } from '@/services/redirectService';
import withAuthentication from '@/authentication/withAuthProtection';
import { Role } from '@/interfaces/Role';

function UsersLayout() {
  const nameSearchInput = 'searchInput';
  
  const searchParamName = 'search';
  const params = useURLParams();
  const searchValue = params[searchParamName] || '';
  const [searchQuery, setSearchQuery] = useState(searchValue);

    const [users, setUsers] = useState<UserDto[]>([]);
    const client = accountClient();

    async function getUsers() {
        const result = await client.getUsers({ search: searchQuery });
        setUsers(result.data);
    }

    useEffect(() => {
          getUsers();
      }, [searchQuery]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const searchInputValue = formData.get(nameSearchInput) as string;
  
      const url = new URL(window.location.href);
      url.searchParams.set(searchParamName, searchInputValue);
      window.history.pushState({}, '', url.toString());
  
      setSearchQuery(searchInputValue);
    }

    const dropdownButtons : DropdownButtonProps<UserDto>[] = [
        {
          text: 'Editar perfil', deleteflag: false,
          condition: (value) => value.role as Role != 'Root',
          onClick: async (id) => {
            router?.push(`/admin/authors/editProfile/?id=${id}`);
          }
        },
        { text: 'Desabilitar', deleteflag: true, condition: (value) => value.role as Role != 'Root',
            onClick: async (id) => {
                alert('desabilitar ' + id);
                await client.disableUser({ id });
                messageService.success("Usuário desativado com sucesso.");
            } }
    ];

  return (
    <AdminLayoutBase title='Gerenciar Usuários'>
        <GrayArea>
                <SubmitButton to='./add' text='Convidar Novo Usuário' />
        </GrayArea>
        <article>
                <GrayArea style={{marginBottom: '60px'}}>
                    <FormSearch
                        placeHolder='Faça uma consulta...'
                        nameSearchInput={nameSearchInput} 
                        handleSubmit={handleSubmit}
                    />
                </GrayArea>
                <Box sx={{ width: '100%' }}>
                    <PersonalDataTable>
                      <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Função</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((x, index) => 
                        <tr key={index}>
                            <td>{x.firstName} {x.lastName}</td>
                            <td>{x.role}</td>
                            <td>{x.email}</td>
                            <td>
                                <ButtonWithDropdown
                                    text='Ações'
                                    dropdownButtons={dropdownButtons}
                                    id={x.authorId}
                                    value={x}
                                />
                            </td>
                        </tr>
                            )}
                      </tbody>
                    </PersonalDataTable>
                </Box>
            </article>
    </AdminLayoutBase>
  )
}

export default withAuthentication(UsersLayout, ['Root', 'Administrator']);
