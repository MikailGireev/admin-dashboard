import axios from 'axios';
import type { RegisterForm } from '../types';

export const registerApi = async (data: RegisterForm) => {
  try {
    const res = await axios.post('https://f52e0e4bff8ca40c.mokky.dev/users', data);
    return res.data;
  } catch (error) {
    throw new Error('Register failed');
  }
};
