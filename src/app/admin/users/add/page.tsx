"use client"

import React, { useEffect, useState } from 'react';
import AdminLayoutBase from '@/app/admin/AdminLayoutBase';
import GrayAreaInput from '@/components/Admin/GrayAreaInput';
import SubmitButton from '@/components/SubmitButton';
import GrayArea from '@/components/GrayArea';
import CustomSelect, { OptionProps } from '@/components/Admin/CustomSelect';
import accountClient from '@/network/lib/accountClient';
// import { ErrorProvider } from '@/contexts/ErrorContext';
import { messageService } from '@/services/messageService';
import withAuthentication from '@/authentication/withAuthProtection';
import { router } from '@/services/redirectService';

function AddUserLayout() {
    const [email, setEmail] = useState('');
    const [availableRolesOptions, setAvailableRolesOptions] = useState<OptionProps[]>([]);
    const [selectedValue, setSelectedValue] = useState<string>('');


    const handleForm : React.MouseEventHandler<HTMLButtonElement> = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const client = accountClient();
        const result = await client.sendNewInviteToken({
            email, 
            role: selectedValue
        });

        if (result.status == 200) {
            messageService.success('Convite enviado com sucesso.');
            router?.push('/admin/users');
        }
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
      };

    useEffect(() => {
        async function getDataFromApi() {
            const client = accountClient();
            const result = await client.getAvailableRoles();
            if (result.status == 200) {
                const response = result.data;
                setAvailableRolesOptions(response);
                setSelectedValue(response[0].value);
            }
        }

        getDataFromApi();
    }, []);

  return (
    <AdminLayoutBase title='Convidar Usuário'>
        {/* <ErrorProvider> */}
        <GrayAreaInput title='Email' 
                       inputName='email' 
                       handleInputChange={(event) => setEmail(event.target.value)}
                       text={email} 
                       type='email'
        />
        <GrayArea style={{ flexDirection: 'column', 
                           gap: '20px' }}
        >
            <p style={{fontWeight: 400, fontSize: '20px'}}>
                Função:
            </p>
            <div style={{ display: 'block' }}>
                <CustomSelect name='role' 
                              options={availableRolesOptions}
                              value={selectedValue}
                              onChange={handleSelectChange}
                />
            </div>
        </GrayArea>
        <div style={{display: 'flex', justifyContent: 'right'}}>
            <SubmitButton text='Salvar'
                          onClick={handleForm}
            />
        </div>
    {/* </ErrorProvider> */}
    </AdminLayoutBase>
  )
}

export default withAuthentication(AddUserLayout, ['Root', 'Administrator']);