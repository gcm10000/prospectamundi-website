"use client"

import React, { useState } from 'react';
import './style.css';
import { AuthService } from '@/services/authService';

function AdminLoginLayout() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      AuthService.login({
        email,
        password
      });
    }
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };

  return (
        <div className="center">
            <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="txt_field">
                    <input type="text" 
                          name='email'
                          value={email}
                          onChange={handleEmailChange} 
                          required />
                    <span></span>
                    <label>Email</label>
                </div>
                <div className="txt_field">
                    <input type="password" 
                          name='password'
                          value={password}
                          onChange={handlePasswordChange} 
                          required />
                    <span></span>
                    <label>Senha</label>
                </div>
                {/* <div className="pass">Forgot Password?</div> */}
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default AdminLoginLayout;