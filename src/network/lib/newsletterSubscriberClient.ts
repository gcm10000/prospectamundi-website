import axiosClient from '../apiClient'
import { PaginatedQueryRequest } from '@/interfaces/PaginatedQueryRequest';
import { PaginatedList } from '@/interfaces/PaginatedList';
import { SubscriberDto } from '@/interfaces/SubscriberDto';

function newsletterSubscriberClient() {
  return {
    async post(request: FormData) {
        const result = await axiosClient.post('/blog/NewsletterSubscriber', request, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        return result;
    },
    async put(subscriberId: string, request: FormData) {
        const result = await axiosClient.put(`/blog/NewsletterSubscriber/${subscriberId}`, request, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        return result;
    },
    async delete(subscriberId: string) {
        const result = await axiosClient.delete(`/blog/NewsletterSubscriber/${subscriberId}`);
        return result;
    },
    async getAll(request: PaginatedQueryRequest) {
        const result = await axiosClient.get<PaginatedList<SubscriberDto>>('/blog/NewsletterSubscriber', {
            params: request
        });
        return result;
    }
  }
}

export default newsletterSubscriberClient;
