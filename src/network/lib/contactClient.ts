import axiosClient from '../apiClient'

function contactClient() {
  return {
    async post(request: FormData) {

      const baseAPIUrl = process.env.NEXT_PUBLIC_APP_BASE_URL_API;
      console.log('baseAPIUrl', baseAPIUrl);

        const result = await axiosClient.post('/Contact', request, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        return result;
    }
  }
}

export default contactClient;
