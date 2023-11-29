"use client"

import React, { FormEvent, useEffect, useState } from 'react'
import AdminLayoutBase from '../AdminLayoutBase';
import SubmitButton from '@/components/SubmitButton';
import GrayAreaInput from '@/components/Admin/GrayAreaInput';
import slugify from 'slugify';
import { messageService } from '@/services/messageService';
import { setShowError } from '@/handlers/errorHandling';
import { router } from '@/services/redirectService';
import categoryClient from '@/network/lib/categoryClient';
import GrayArea from '@/components/GrayArea';
import { useSearchParams } from 'next/navigation';

export interface AddOrEditCategoriesLayoutProps {
    mode: "add" | "edit";
}

function AddOrEditCategoriesLayout({ mode } : AddOrEditCategoriesLayoutProps) {
  
  const [slug, setSlug] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const searchParams = useSearchParams();


  const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);

    const nameWithoutNumbers = name.replace(/\d+/g, '');
    const newSlug = slugify(nameWithoutNumbers, { lower: true });
    setSlug(newSlug);
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
 
    const categoryId = searchParams.get('id');

    const client = categoryClient();
    if (!categoryId) {
      await client.post(formData);
      await messageService.success('Categoria salva com sucesso.');
    } else {
      await client.put(categoryId, formData);
      await messageService.success('Categoria atualizada com sucesso.');
    }
    router?.push("/admin/categories");
  }
  

  useEffect(() => {
    setShowError((errorObject) => {
        const errorArray : string[] = errorObject['image'];
        if (errorArray) {
            setErrors(errorArray);
      }
    });
  }, []);

  useEffect(() => {
    async function getCategory() {
      if (mode != 'edit')
        return;

      const categoryId = searchParams.get('id');
      if (!categoryId) {
        messageService.error("Id da categoria inválido.").then(() => {
          router?.push("/admin/categories");
        });
        return;
      }
      const client = categoryClient();
      const result = await client.get({ id: categoryId });
      const category = result.data;
      setName(category.name);
      setSlug(category.slug);
    }

    getCategory();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
        <AdminLayoutBase title={ mode == 'add' ? 'Adicionar Categoria' : 'Editar Categoria'}>
            <GrayAreaInput title='Nome' inputName='name' text={name} handleInputChange={handleTitleInputChange} />
            <GrayAreaInput title='Slug' inputName='slug' text={slug} />
            <div style={{display: 'flex', justifyContent: 'right'}}>
                <SubmitButton 
                    text='Finalizar'
                    type="submit"
                />
            </div>
        </AdminLayoutBase>
    </form>
  )
}

export default AddOrEditCategoriesLayout;
