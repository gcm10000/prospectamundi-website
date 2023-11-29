"use client"

import { SignInUserRequest } from "@/interfaces/SignInUserRequest";
import accountClient from "@/network/lib/accountClient";
import { router } from "./redirectService";
import { messageService } from "./messageService";
import currentUserService from "./currentUserService";
import RoleConstrants from '@/constrants/RoleConstrants'
import authorClient from "@/network/lib/authorClient";
import { AuthorDto } from "@/interfaces/AuthorDto";

export const AuthService = {
    login: async (credentials: SignInUserRequest) => {
      const client = accountClient();
      const result = await client.signIn(credentials);
      if (result.status == 200) {
        const response = result.data;
        localStorage.setItem('accessToken', response.accessToken!);
        localStorage.setItem('refreshToken', response.refreshToken!);

        const userService = currentUserService();
        const role = userService.getRole();
        if (role == RoleConstrants.root && userService.isFirstAccess()) {
            router?.push("/adminLogin//changePassword");
            return;
        }

        if (role == RoleConstrants.root) {
            router?.push("/admin/posts");
            return;
        }
        
        const authorClientAPI = authorClient();
        const hasProfileResult = await authorClientAPI.checkIfUserHasProfile();
        const hasProfile = hasProfileResult.data;
        if (role != RoleConstrants.root && !hasProfile) {
            router?.push("/admin/authors/fillProfile");
            return;
        }
        
        const profileResult = await authorClientAPI.getOwnProfile();
        const profile = profileResult.data;
        localStorage.setItem('authorProfile', JSON.stringify(profile));

        location.href = "/admin/posts";
        return;
      }

      messageService.error("Email ou senha inválidos");
    },
    storageProfile: async (): Promise<void> => {
      const authorClientAPI = authorClient();

      const profileResult = await authorClientAPI.getOwnProfile();
      const profile = profileResult.data;
      localStorage.setItem('authorProfile', JSON.stringify(profile));
    },
    getProfile: (): AuthorDto | null => {
      const authorProfileFromLocalStorageAsString = localStorage.getItem('authorProfile');
      if (!authorProfileFromLocalStorageAsString)
          return null;

      const authorProfileFromLocalStorage = JSON.parse(authorProfileFromLocalStorageAsString);
      return authorProfileFromLocalStorage;
    },
    invalidateProfile: (): void => {
      localStorage.removeItem('authorProfile');
    },
    logout: (): void => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('authorProfile');
      location.href = "/adminLogin";
    }
  };