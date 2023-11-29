import accountClient from "@/network/lib/accountClient";

export const AuthorizationService = {
    hasPermission: async (controllerName : string, actionName : string): Promise<boolean> => {
        const client = accountClient();

        //é necessário cachear isso
        
        const response = await client.getAvailableEndpoints();
        const data = response.data;

        return data.controllerName.toLowerCase() == controllerName.toLowerCase() &&
               data.actionName.toLowerCase() == actionName.toLowerCase();
    },
  };
  