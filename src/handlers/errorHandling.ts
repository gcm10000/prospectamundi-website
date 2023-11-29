type ErrorHandler = (error: any | null) => void;

const errorHandlers: ErrorHandler[] = [];

export const setShowError = (fn: ErrorHandler) => {
  errorHandlers.push(fn);
};

export const showError = (error: any) => {
  errorHandlers.forEach((handler) => {
    handler(error);
  });
  window.scrollTo(0, 0);
};

export const clearError = () => {
  errorHandlers.forEach((handler) => {
    handler(null);
  });
};
