import { EndpointInfo } from '@/interfaces/EndpointInfo';
import { SignInUserRequest } from '@/interfaces/SignInUserRequest';
import axiosClient from '../apiClient'
import { SignInResponse } from '@/interfaces/SignInResponse';
import { OptionProps } from '@/components/Admin/CustomSelect';
import { InviteTokenRequest } from '@/interfaces/InviteTokenRequest';

function accountClient() {
  return {
    async signIn(request: SignInUserRequest) {
        const result = await axiosClient.post<SignInResponse>('/Account/SignIn', request);
        return result;
    },
    async getAvailableRoles() {
      const result = await axiosClient.get<OptionProps[]>('/Account/GetAvailableRoles');
      return result;
    },
    async getAvailableEndpoints() {
      const result = await axiosClient.get<EndpointInfo>('/Account/GetAvailableEndpoints');
      return result;
    },
    async sendNewInviteToken(request: InviteTokenRequest) {
      const result = await axiosClient.post('/Account/SendNewInviteToken', request);
      return result;
    }
  }
}

export default accountClient;
