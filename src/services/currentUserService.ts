"use client"

import { getAccessToken } from '@/network/apiClient';
import { JwtPayload } from 'jsonwebtoken';
import { jwtDecode } from "jwt-decode";
import { Role } from '@/interfaces/Role'

function currentUserService() {

    function getDecodedToken() {
        const token = getAccessToken();
        if (!token)
            return null;
        const decoded : JwtPayload = jwtDecode(token);
        return decoded;
    }
    
    const decodedToken = getDecodedToken();

    return {
        getEmail() : string { 
            if (!decodedToken)
                throw new Error('Token is not valid.');

            const email = decodedToken['email'];
            return email;
        },
        isFirstAccess() : boolean {
            if (!decodedToken)
                throw new Error('Token is not valid.');

            const isFirstAccessAsString : string | undefined = decodedToken['FirstAccess'];
            if (!isFirstAccessAsString)
                return false;

            const isFirstAccess = Boolean(isFirstAccessAsString);
            return isFirstAccess;
        },
        getRole() : Role | null {
            if (!decodedToken)
                return null;

            const email = decodedToken['role'];
            return email;
        },
        isUserAllowed(expectedRoles: Role[]) : boolean {
            const currentRole = this.getRole();
            if (!currentRole)
                return false;

            var result = expectedRoles.includes(currentRole);
            return result;
        }
    }
}

export default currentUserService;