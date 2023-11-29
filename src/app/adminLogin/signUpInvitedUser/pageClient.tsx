"use client"

import React, { useEffect, useState } from 'react';
import './../style.css';
import accountClient from '@/network/lib/accountClient';
import { messageService } from '@/services/messageService';
import { setShowError } from '@/handlers/errorHandling';
import useURLParams from '@/hooks/useURLParams';
import { JwtPayload } from 'jsonwebtoken';
import { jwtDecode } from 'jwt-decode';
import ClaimConstrants from '@/constrants/ClaimConstrants';
import { router } from '@/services/redirectService';


function SignUpInvitedUserClient() {
    const params = useURLParams();
    const token = params['token'];
    const email = getEmailFromToken(token);
    
    function getEmailFromToken(token: string | null) {
        if (!token)
            return null;

        const decoded : JwtPayload = jwtDecode(token);
        const email = decoded[ClaimConstrants.emailAddress];
        return email;
    }

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
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

        if (!token) {
            messageService.error('Token inválido.');
            return;
        }
        
        if (password != confirmPassword) {
            messageService.error("As senhas não se coincidem.");
            return;
        }

        const client = accountClient();
        const request = { email, password, token };
        await client.signUpInvitedUserToken(request);
        await messageService.success('Cadastro realizado com sucesso.');
        router?.push("/adminLogin");
    }
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
      
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
      };

  return (
        <div className="center">
            <h1>Cadastre-se</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="txt_field">
                    <input type="text" 
                          name='email'
                          value={email || ''}
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

export default SignUpInvitedUserClient;