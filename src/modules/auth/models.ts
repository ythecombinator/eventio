export interface UserCredentials {
  email: string;
  password: string;
}

export interface RefreshCredentials {
  refreshToken: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
