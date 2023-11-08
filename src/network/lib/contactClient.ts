import axiosClient from '../apiClient'

function contactClient() {
  return {
    async post(request: FormData) {
        const result = await axiosClient.post('/Contact', request, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        return result;
    }
  }
}

export default contactClient;
