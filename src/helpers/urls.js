const API_ROOT = "http://localhost:8000/";

export const APIUrls = {
  login: () => `${API_ROOT}api/public/auth/email/signin`,
  signup: () => `${API_ROOT}api/public/auth/email/signup`,
};
