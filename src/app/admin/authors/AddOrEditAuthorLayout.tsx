"use client"

import React, { useState } from 'react';
import AdminLayoutBase from '../AdminLayoutBase';
import GrayAreaInput from '@/components/Admin/GrayAreaInput';
import SubmitButton from '@/components/SubmitButton';
import FileUpload from '@/components/Admin/FileUpload';
import GrayArea from '@/components/GrayArea';
import AuthorBox from '@/components/AuthorBox';

function AddUserLayout() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleFileChange = (file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setImageURL(imageUrl);
      };

  return (
    <AdminLayoutBase title='Adicionar Autor'>
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
                        onChangeFile={handleFileChange} />
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
            />
        </div>
    </AdminLayoutBase>
  )
}

export default AddUserLayout;
