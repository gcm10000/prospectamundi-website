import { EndpointInfo } from '@/interfaces/EndpointInfo';
import { SignInUserRequest } from '@/interfaces/SignInUserRequest';
import { ChangeSudoPasswordRequest } from '@/interfaces/ChangeSudoPasswordRequest';
import axiosClient from '../apiClient'
import { SignInResponse } from '@/interfaces/SignInResponse';
import { OptionProps } from '@/components/Admin/CustomSelect';
import { InviteTokenRequest } from '@/interfaces/InviteTokenRequest';
import { SignUpInvitedUserTokenRequest } from '@/interfaces/SignUpInvitedUserTokenRequest';
import { UserDto } from '@/interfaces/UserDto';
import { DisableRequest } from '@/interfaces/DisableRequest'

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
    },
    async changeSudoPassword(request: ChangeSudoPasswordRequest) {
      const result = await axiosClient.post('/Account/ChangeSudoPassword', request);
      return result;
    },
    async signUpInvitedUserToken(request: SignUpInvitedUserTokenRequest) {
      const result = await axiosClient.post('/Account/SignUpInvitedUserToken', request);
      return result;
    },
    async getUsers(params: any) {
      const result = await axiosClient.get<UserDto[]>('/Account/GetUsers', { params: params });
      return result;
    },
    async disableUser(request: DisableRequest) {
      const result = await axiosClient.put('/Account/DisableUser', request);
      return result;
    }
  }
}

export default accountClient;
