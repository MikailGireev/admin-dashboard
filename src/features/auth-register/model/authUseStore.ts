import axios from 'axios';
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import type { UserRegister } from '../types';
import { useToast } from 'vue-toast-notification';

export const useAuthStore = defineStore('auth', () => {
  const user = reactive<UserRegister>({
    email: '',
    username: '',
    password: '',
  });
  const isLoading = ref<boolean>(false);
  const errorMesage = ref<boolean>(false);

  const regUser = async (user: UserRegister) => {
    try {
      isLoading.value = false;

      const res = await axios.get('http://localhost:3000/users');
      const existingUser = await res.data.find((u: UserRegister) => u.email === user.email);
      const toast = useToast();

      if (!user.email || !user.password || !user.username) {
        toast.error('All fields are required', {
          position: 'top-right',
          duration: 3000,
        });
        errorMesage.value = true;
        return;
      }

      if (existingUser) {
        toast.error('User already exists', {
          position: 'top-right',
          duration: 3000,
        });

        isLoading.value = false;
        errorMesage.value = true;
        return;
      }

      const postRes = await axios.post('http://localhost:3000/users', user);

      return postRes.data;
    } catch (err) {
      console.log(err);
      throw new Error('Register failed');
    }
  };

  return { user, isLoading, regUser, errorMesage };
});
