import { useEffect } from "react";
import { AuthorizationService } from "@/services/authorizationService";
import { redirect } from "next/navigation";

export const withAuthProtection = (Component: React.ComponentType<any>, 
    controllerName: string, 
    actionName: string) => {

    if (!AuthorizationService.hasPermission(controllerName, actionName)) {
        return <div><b>Unauthorized Access</b></div>;
    }

    return function ProtectedComponent(props: any) {
      useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          redirect('/adminLogin');
        }
      }, []);
  
      return <Component {...props} />;
    };
  };