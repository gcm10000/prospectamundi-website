import { AuthorDto } from '@/interfaces/AuthorDto';
import axiosClient from '../apiClient'

function authorClient() {
  return {
    async checkIfUserHasProfile() {
      const result = await axiosClient.get<boolean>('/blog/Author/CheckIfUserHasProfile');
      return result;
    },
    async attachUserWithAuthor(request: FormData) {
        const result = await axiosClient.post('/blog/Author', request, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      return result;
    },
    async updateOwnProfile(request: FormData) {
        const result = await axiosClient.put('/blog/Author/UpdateOwnProfile', request, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      return result;
    },
    async update(authorId: string, request: FormData) {
      const result = await axiosClient.put(`/blog/Author/${authorId}`, request, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return result;
    },
    async getOwnProfile() {
      const result = await axiosClient.get<AuthorDto>('/blog/Author/GetOwnProfile');
      return result;
    },
    async get(authorId: string) {
      const result = await axiosClient.get<AuthorDto>(`/blog/Author/${authorId}`);
      return result;
    }
  }
}

export default authorClient;
