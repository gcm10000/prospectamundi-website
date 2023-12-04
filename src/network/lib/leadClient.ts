import axiosClient from '../apiClient'

function leadClient() {
  return {
    async post(request: FormData) {
        const result = await axiosClient.post('/Lead/PostLandingPage', request, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        return result;
    }
  }
}

export default leadClient;
