import { useEffect, useState } from 'react';

interface URLParams {
  [key: string]: string | null;
}

const useURLParams = (): URLParams => {
    const [params, setParams] = useState<URLParams>({});

    useEffect(() => {
      const queryString = window.location.search;
  
      // Verifica se há uma string de consulta na URL
      if (queryString) {
        const urlParams = new URLSearchParams(queryString);
        const paramsObject: URLParams = {};
  
        // Itera sobre os parâmetros da URL e os armazena em um objeto
        urlParams.forEach((value, key) => {
          paramsObject[key] = value;
        });
  
        // Define o estado com os parâmetros da URL
        setParams(paramsObject);
      }
    }, []);
  
    return params;
  };

export default useURLParams;
