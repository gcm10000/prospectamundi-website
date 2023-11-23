  let showErrorFn: (error: any | null) => void = () => {};
  
  export const setShowError = (fn: (error: any | null) => void) => {
    showErrorFn = fn;
  };
  
  export const showError = (error: any) => {
    showErrorFn(error);
  };
  
  export const clearError = () => {
    showErrorFn(null);
  };
  