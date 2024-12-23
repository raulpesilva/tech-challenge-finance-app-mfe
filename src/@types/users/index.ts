export interface PrivateUser {
  id: string;
  name: string;
  email: string;
  acceptedTerm: boolean;
  password: string;
}

export interface PublicUser {
  id: string;
  name: string;
  email: string;
}
