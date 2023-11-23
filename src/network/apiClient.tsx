import axios from 'axios';
import { ErrorDialog, ErrorGenericDialog } from '../components/ErrorDialog/ErrorDialog';
import { hideBackdrop, showBackdrop } from '@/layouts/AutoBackdrop';
import { setShowError, showError } from '@/handlers/errorHandling';

export interface TokensProps {
  accessToken: string,
  refreshToken: string
}

export function getAccessToken() {
  const json = localStorage.getItem('accessToken');
  if (json == null)
    return null;

  const authTokens : TokensProps = JSON.parse(json);
  return authTokens;
}


export function getTokens() {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken)
      return null;
  
  const authTokens : TokensProps = {
    accessToken,
    refreshToken
  };
  return authTokens;
}

export function setTokens({accessToken, refreshToken} : TokensProps) {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
}

export function clearToken() {
  localStorage.removeItem('auth_tokens');
}

export function isLogged() {
  return getTokens() != null;
}

export function logoff() {
  alert('logoff');
  localStorage.removeItem('auth_tokens');
  window.location.href = "/login";
}

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL_API
  });

  axiosClient.interceptors.request.use(config => {
    const request = {
      data: config.data,
      urlRoute: config.url
    };

    console.log('Request:', request);
    showBackdrop();
    return config;
  }, error => {
    console.log('Request:', error);
    hideBackdrop();
    return Promise.reject(error);
  });

  axiosClient.interceptors.request.use(config => {
    const token = getTokens()?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  

  axiosClient.interceptors.response.use(
    function (response) {
      console.log('Request:', response);
      hideBackdrop();
      return response;
    }, 
    function (error) {
      hideBackdrop();
      
      console.error('Request Error:', error);
      if (error.code == 'ERR_NETWORK') {
        const errors = ["Não foi possível se conectar com o servidor."];
        ErrorDialog({errors});
        return Promise.reject(error);
      }

      const res = error.response;
      
      if (res.status == 400) {
        console.log('res.data', res.data);
        showError(error.response.data.errors);
        return Promise.reject(error);
      }
      
      // if (res.status == 401) {
      //   clearToken();
      //   alert('401');
      //   window.location.href = "/login";
      // }
      
      console.error("Looks like there was a problem. Status Code: " + res.status);

      if (res.status == 409) {
        return Promise.reject(error);
      }


      if (res.status == 422) {
        console.log(res.data);
        const errors : string[] = res.data.errors;
        const detail = res.data.detail;
        ErrorDialog({ detail, errors });
        return Promise.reject(error);
      }

      if (res.status == 500) {
        ErrorGenericDialog();
        return Promise.reject(error);
      }
      
      return Promise.resolve(error);
    }
  );

export default axiosClient;