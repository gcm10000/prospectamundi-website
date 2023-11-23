"use client"

import { SignInUserRequest } from "@/interfaces/SignInUserRequest";
import accountClient from "@/network/lib/accountClient";
import { router } from "./redirectService";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Button } from "@/components/Button";
const MySwal = withReactContent(Swal);

export const AuthService = {
    login: async (credentials: SignInUserRequest) => {
      const client = accountClient();
      const result = await client.signIn(credentials);
      if (result.status == 200) {
        const response = result.data;
        localStorage.setItem('accessToken', response.accessToken!);
        localStorage.setItem('refreshToken', response.refreshToken!);
        router?.push("/admin/posts");
        return;
      }

      MySwal.fire({
        title: <strong>Erro</strong>,
        html: <p>Email ou senha inválidos.</p>,
        icon: 'error',
        buttonsStyling: false,
        showCancelButton: false,
        confirmButtonText: <Button>Entendido</Button>,
      });
    },
    logout: (): void => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      router?.push("/adminLogin");
    }
  };