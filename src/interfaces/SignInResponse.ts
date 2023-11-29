export interface SignInResponse {
    success: boolean;
    accessToken?: string | null;
    refreshToken?: string | null;
    dateExpiration?: string | null;
    errors?: string[] | null;
    resultAsString?: string | null;
  }
  