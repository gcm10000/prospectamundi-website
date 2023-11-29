"use client"

import { Role } from '@/interfaces/Role';
import currentUserService from '@/services/currentUserService';
import { router } from '@/services/redirectService';
import React, { ComponentType, useEffect, useState } from 'react';

interface WithAuthenticationProps {
  isAuthenticated: boolean;
}

const withAuthentication = <P extends object>(
  WrappedComponent: ComponentType<P & WithAuthenticationProps>,
  allowedRoles: Role[]
): React.FC<P> => {
  const WithAuthenticationComponent: React.FC<P> = (props) => {

    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
      const userService = currentUserService();

      const isAuthorized = userService.isUserAllowed(allowedRoles);
      if (!isAuthorized) {
        router?.push("/adminLogin");
      }
      setIsAuthorized(isAuthorized);
    }, []);

    if (isAuthorized)
      return <WrappedComponent {...props as P & WithAuthenticationProps} />;
    
    return null;
  };

  return WithAuthenticationComponent;
};

export default withAuthentication;
