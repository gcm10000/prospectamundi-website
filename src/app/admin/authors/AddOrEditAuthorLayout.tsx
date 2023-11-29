"use client"

import React, { FormEvent, useEffect, useState } from 'react';
import AdminLayoutBase from '../AdminLayoutBase';
import GrayAreaInput from '@/components/Admin/GrayAreaInput';
import SubmitButton from '@/components/SubmitButton';
import FileUpload from '@/components/Admin/FileUpload';
import GrayArea from '@/components/GrayArea';
import AuthorBox from '@/components/AuthorBox';
import authorClient from '@/network/lib/authorClient';
import { messageService } from '@/services/messageService';
import { AuthService } from '@/services/authService';
import { router } from '@/services/redirectService';
import { AuthorDto } from '@/interfaces/AuthorDto';

export interface AddOrEditUserLayoutProps {
    mode: 'fillProfile' | 'editOwnProfile' | 'editProfile';
} 

function AddOrEditAuthorLayout({ mode }: AddOrEditUserLayoutProps) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        async function getOwnProfile() {
            const client = authorClient();
            const result = await client.getOwnProfile();
            const response = result.data;
            setAuthor(response);
        }

        async function getProfile() {
            const urlParams = new URLSearchParams(window.location.search);
            const authorId = urlParams.get('id');
            if (!authorId) {
                messageService.error("Id do autor inválido.");
                router?.push("/admin/posts/");
                return;
            }

            const client = authorClient();
            const result = await client.get(authorId);
            const response = result.data;
            setAuthor(response);
        }

        if (mode == 'editOwnProfile')
            getOwnProfile();

        if (mode == 'editProfile')
            getProfile();

    }, []);

    function setAuthor(response: AuthorDto) {
        setFirstName(response.firstName);
        setLastName(response.lastName);
        setBio(response.bio);
        setImageURL(response.profileImageUrl);
    }

    const handleFileChange = (file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setImageURL(imageUrl);
      };

      const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const file = formData.get('image') as File;
        if (file != null && file.size == 0) {
            messageService.error("É necessário inserir uma imagem.");
            return;
        };

        const executeRequestAccordingWithMode = {
            'fillProfile': async () => {
                const client = authorClient();
                await client.attachUserWithAuthor(formData);
                await messageService.success("Perfil preenchido com sucesso. Por favor, logue novamente para ter acesso.");
                AuthService.logout();
            },
            'editOwnProfile': async () => {
                const client = authorClient();
                await client.updateOwnProfile(formData);
                await messageService.success("Seu perfil foi atualizado com sucesso.");
            },
            'editProfile': async () => {
                const urlParams = new URLSearchParams(window.location.search);
                const authorId = urlParams.get('id');
                if (!authorId) {
                    await messageService.error("Id do autor é inválido.");
                    router?.push("/admin/authors");
                    return;
                }
                const client = authorClient();
                await client.update(authorId, formData);
                await messageService.success("Seu perfil foi atualizado com sucesso.");

            }
        };

        await executeRequestAccordingWithMode[mode]();

    };

    function getTitle(mode: string) {
        if (mode == 'editOwnProfile' || mode == 'editProfile')
            return "Editar Informações do Perfil";
        return "Preencher Informações do Perfil";
    }

  return (
    <form onSubmit={handleSubmit}>
        <AdminLayoutBase title={getTitle(mode)} donotShowSideBar={mode == 'fillProfile'}>
                <GrayAreaInput title='Nome' 
                            inputName='firstName' 
                            handleInputChange={(event) => setFirstName(event.target.value)}
                            text={firstName} 
                />
                <GrayAreaInput title='Sobrenome' 
                            inputName='lastName'
                            handleInputChange={(event) => setLastName(event.target.value)}
                            text={lastName} />
                <GrayAreaInput title='Bio' 
                            inputName='bio'
                            handleInputChange={(event) => setBio(event.target.value)} 
                            text={bio} 
                />
                <GrayArea style={{ flexDirection: 'column', 
                                gap: '20px' }}
                >
                    <p style={{fontWeight: 400, fontSize: '20px'}}>
                        Imagem:
                    </p>
                    <FileUpload id='image' 
                                name='image'
                                onChangeFile={handleFileChange}
                                imageName={imageURL} />
                </GrayArea>
                <div style={{backgroundColor: '#F0F0F0'}}>
                    <p style={{fontWeight: 400, fontSize: '20px'}}>
                            Prévia:
                    </p>
                    <AuthorBox name={firstName + ' ' + lastName} 
                            description={bio} 
                            srcImg={imageURL}
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'right'}}>
                    <SubmitButton 
                        text='Salvar' 
                        type='submit'
                        // onClick={}
                    />
                </div>
        </AdminLayoutBase>
    </form>
  )
}

export default AddOrEditAuthorLayout;
