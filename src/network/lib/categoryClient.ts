import axiosClient from '../apiClient'
import { QueryRequest } from '@/interfaces/QueryRequest';
import { PaginatedList } from '@/interfaces/PaginatedList';
import { CategoryDto } from '@/interfaces/CategoryDto';

function categoryClient() {
  return {
    async post(request: FormData) {
        const result = await axiosClient.post('/blog/category', request, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        return result;
    },
    async put(categoryId: string, request: FormData) {
        const result = await axiosClient.put(`/blog/category/${categoryId}`, request, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        return result;
    },
    async delete(postId: string) {
        const result = await axiosClient.delete(`/blog/category/${postId}`);
        return result;
    },
    async getAll() {
        const result = await axiosClient.get<PaginatedList<CategoryDto>>('/blog/category/getall');
        return result;
    },
    async anonymousGetAll() {
        const result = await axiosClient.get<PaginatedList<CategoryDto>>('/blog/category/anonymous/getall');
        return result;
    },
    async get(request: QueryRequest) {
        const result = await axiosClient.get<CategoryDto>(`blog/category`, {
            params: request
        });
        return result;
    }
  }
}

export default categoryClient;
