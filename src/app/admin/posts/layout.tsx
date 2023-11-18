"use client"

import SideNavigationBar from '@/components/Admin/SideNavigationBar';
import styles from './style.module.css';
import React from 'react'
import { Button } from '@/components/Button';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function PostsLayout() {

    const columns: GridColDef[] = [
        {
          field: 'title',
          headerName: 'Título',
          width: 150,
          sortable: false,
        },
        {
          field: 'author',
          headerName: 'Autor',
          width: 150,
          sortable: false,
        },
        {
          field: 'createdAt',
          headerName: 'Data de Criação',
          type: 'dateTime',
          width: 160,
          sortable: false,
        },
        {
          field: 'updatedBy',
          headerName: 'Editado Por',
          width: 160,
          sortable: false,
        },
        {
          field: 'updatedAt',
          headerName: 'Data de Atualização',
          //   description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        //   valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];

      const rows = [
        { id: 1, title: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, title: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, title: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, title: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, title: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, title: 'Melisandre', firstName: null, age: 150 },
        { id: 7, title: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, title: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, title: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

  return (
    <div style={{display: 'flex', marginTop: '80px'}}>
        <SideNavigationBar></SideNavigationBar>
        <main style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: '2em', flex: 1, padding: '2em'}}>
            <article className={styles.buttonArea}>
                <Button>Adicionar Nova Postagem</Button>
            </article>
            <article>
                <h1 style={{textAlign: 'center'}}>Gerenciar Postagem</h1>
                <Box sx={{ height: 400, width: '100%' }}>
                    <div style={{display: 'table', tableLayout: 'fixed', width: '100%'}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                            pagination: {
                                paginationModel: {
                                pageSize: 5,
                                },
                            },
                            }}
                            pageSizeOptions={[5]}
                            checkboxSelection={false}
                            disableRowSelectionOnClick
                            disableColumnMenu
                            autoHeight
                            rowCount={10}
                            sx={{
                                "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                    outline: "none !important"
                                },
                                "&.MuiDataGrid-selectedRowCount" : {
                                    visibility: 'none'
                                },
                                "&.MuiDataGrid-cell:focus" : {
                                    outline: "none !important"
                                }
                            }}
                        />
                    </div>

                </Box>
            </article>
        </main>
    </div>
  )
}

export default PostsLayout;
