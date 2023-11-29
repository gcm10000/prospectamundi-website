import axiosClient from '../apiClient'
import { PaginatedQueryRequest } from '@/interfaces/PaginatedQueryRequest';
import { QueryRequest } from '@/interfaces/QueryRequest';
import { PaginatedList } from '@/interfaces/PaginatedList';
import { PostDto } from '@/interfaces/PostDto';

function postClient() {
  return {
    async post(request: FormData) {
        const result = await axiosClient.post('/blog/post', request);
        return result;
    },
    async put(postId: string, request: FormData) {
        const result = await axiosClient.put(`/blog/post/${postId}`, request);
        return result;
    },
    async disable(postId: string) {
        const result = await axiosClient.delete(`/blog/post/disable/${postId}`);
        return result;
    },
    async enable(postId: string) {
        const result = await axiosClient.delete(`/blog/post/enable/${postId}`);
        return result;
    },
    async publishPost(postId: string) {
        const result = await axiosClient.put(`/blog/post/PublishPost/${postId}`);
        return result;
    },
    async delete(postId: string) {
        const result = await axiosClient.delete(`/blog/post/${postId}`);
        return result;
    },
    async getAll(request: PaginatedQueryRequest) {
        const result = await axiosClient.get<PaginatedList<PostDto>>('/blog/post/getall', {
            params: request
        });
        return result;
    },
    async anonymousGetAll(request: PaginatedQueryRequest) {
        const result = await axiosClient.get<PaginatedList<PostDto>>('/blog/post/anonymous/getall', {
            params: request
        });
        return result;
    },
    async get(request: QueryRequest) {
        const result = await axiosClient.get<PostDto>(`blog/post`, {
            params: request
        });
        return result;
    }
  }
}

export default postClient;
