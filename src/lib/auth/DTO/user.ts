import { PrivateUser, PublicUser } from '@/@types/users';

export const userDTO = (user: PrivateUser): PublicUser => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
  };
};
