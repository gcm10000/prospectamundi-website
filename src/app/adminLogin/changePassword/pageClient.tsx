"use client"

import React, { useEffect, useState } from 'react';
import './../style.css';
import currentUserService from '@/services/currentUserService';
import accountClient from '@/network/lib/accountClient';
import { messageService } from '@/services/messageService';
import { setShowError } from '@/handlers/errorHandling';
import { router } from '@/services/redirectService';

function ChangePasswordClient() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
  

    useEffect(() => {
        const userService = currentUserService();
        const userEmail = userService.getEmail();
        
        setEmail(userEmail);

        setShowError((errorObject) => {
            const allErrorMessages = extractErrorMessages(errorObject);
            setErrors(allErrorMessages);

        });
      }, []);

      function extractErrorMessages(errorObj: Record<string, string[]>): string[] {
        const errorMessages: string[] = [];
    
        for (const key in errorObj) {
            if (Array.isArray(errorObj[key])) {
                errorObj[key].forEach((error: string) => {
                    errorMessages.push(error);
                });
            }
        }
    
        return errorMessages;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (password != confirmPassword) {
            messageService.error("As senhas não se coincidem.");
            return;
        }

        const client = accountClient();
        const result = await client.changeSudoPassword({ password });
        if (result.status == 200) {
            messageService.success(`Alteração da senha do usuário '${email}' realizada com sucesso.`);
            router?.push('/admin/posts');
        }
    }
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
      
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
      };

  return (
        <div className="center">
            <h1>Alterar a senha</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="txt_field">
                    <input type="text" 
                          name='email'
                          value={email}
                          onChange={() => {}}
                         />
                    <span></span>
                    <label>Email</label>
                </div>
                <div className="txt_field">
                    <input type="password" 
                          name='password'
                          value={password}
                          onChange={handlePasswordChange} 
                          autoComplete='off'
                          required />
                    <span></span>
                    <label>Senha</label>
                </div>
                <div className="txt_field">
                    <input type="password" 
                          name='confirmPassword'
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange} 
                          autoComplete='off'
                          required />
                    <label>Confirmar a senha</label>
                </div>
                <div className="txt_field" style={{border: 'none', color: 'red'}}>
                    {errors.map(x => 
                        <p>{x}</p>
                    )}
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default ChangePasswordClient;