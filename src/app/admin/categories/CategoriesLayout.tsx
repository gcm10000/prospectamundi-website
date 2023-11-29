"use client"

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import SubmitButton from '@/components/SubmitButton';
import ButtonWithDropdown, { DropdownButtonProps } from '@/components/ButtonWithDropdown';
import AdminLayoutBase from '../AdminLayoutBase';
import GrayArea from '@/components/GrayArea';
import PersonalDataTable from '@/components/Admin/PersonalDataTable';
import { PaginatedList } from '@/interfaces/PaginatedList';
import useURLParams from '@/hooks/useURLParams';
import { router } from '@/services/redirectService';
import { messageService } from '@/services/messageService';
import categoryClient from '@/network/lib/categoryClient';
import { CategoryDto } from '@/interfaces/CategoryDto';
import BlogContent from '@/components/BlogContent';

function CategoriesLayout() {
    
    const nameSearchInput = 'searchInput';

    const searchParamName = 'search';
    const params = useURLParams();
    const searchValue = params[searchParamName] || '';
    const [searchQuery, setSearchQuery] = useState(searchValue);

    const [categories, setCategories] = useState<PaginatedList<CategoryDto>>({
        items: [],
        pageNumber: 0,
        totalCount: 0,
        totalPages: 0
    });


    useEffect(() => {
        getCategories();
    }, [searchQuery]);

    async function getCategories() {
        const client = categoryClient();
        const result = await client.getAll();

        const categoriesFromApi = result.data;
        setCategories(categoriesFromApi);
    }

    const dropdownButtons : DropdownButtonProps<CategoryDto>[] = [
        { text: 'Editar', deleteflag: false, condition: (value) => true,
          onClick: (id: string) => {
                router?.push(`/admin/categories/edit/?id=${id}`);
            } },
        { text: 'Remover', deleteflag: true, condition: (value) => true,
            onClick: async (id) => {
                const client = categoryClient();
                await client.delete(id);
                await messageService.success("Categoria removida com sucesso.");
                getCategories();
            } }
    ];

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const searchInputValue = formData.get(nameSearchInput) as string;

    //     const url = new URL(window.location.href);
    //     url.searchParams.set(searchParamName, searchInputValue);
    //     window.history.pushState({}, '', url.toString());

    //     setSearchQuery(searchInputValue);
    //   }

  return (
    <>
        <AdminLayoutBase title='Gerenciar Categorias'>
            <GrayArea>
                <SubmitButton to='./add' text='Adicionar Nova Categoria'  />
            </GrayArea>
            <article>
                <Box sx={{ width: '100%' }}>
                    {/* <div style={{display: 'table', tableLayout: 'fixed', width: '100%'}}>

                    </div> */}
                    <PersonalDataTable>
                      <thead>
                        <tr>
                          <th>Categoria</th>
                          <th>Criado Em</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.items.map((x, index) =>
                        <tr key={index}>
                            <td>{x.name}</td>
                            <td>{x.createdAt}</td>
                            <td style={{cursor: 'auto'}}>
                                <ButtonWithDropdown
                                    text='Ações'
                                    dropdownButtons={dropdownButtons}
                                    value={x}
                                    id={x.id}
                                />
                            </td>
                        </tr>
                            )}
                      </tbody>
                    </PersonalDataTable>
                </Box>
            </article>
       </AdminLayoutBase>
    </>
  )
}

export default CategoriesLayout;
