import type { UserRegister } from '../types';
import { useAuthStore } from './authUseStore';

export const useRegister = () => {
  const store = useAuthStore();

  const submit = async (e: Event) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const values: UserRegister = {
      email: formData.get('email') as string,
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    };

    await store.regUser(values);
  };

  return {
    submit,
  };
};
