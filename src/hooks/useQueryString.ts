import { useEffect, useState } from 'react';

function useQueryString(paramName: string) {
    const [paramValue, setParamValue] = useState('');
  
    useEffect(() => {
      const handleParamChange = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const param = urlParams.get(paramName) || '';
        setParamValue(param);
        
        // Aqui você pode executar ações com base na nova query string
        // por exemplo, fazer uma chamada para buscar dados com base na nova query string
      };
  
      // Adicionando os event listeners para popstate e pushstate
      window.addEventListener('popstate', handleParamChange);
      window.addEventListener('pushstate', handleParamChange);
  
      // Chamada inicial para configurar o estado com a query string atual
      handleParamChange();
  
      // Removendo os event listeners no cleanup
      return () => {
        window.removeEventListener('popstate', handleParamChange);
        window.removeEventListener('pushstate', handleParamChange);
      };
    }, [paramName]);
  
    return paramValue;
  }
  
  export default useQueryString;