import axios from 'axios';
import type { RegisterForm } from '../types';

export const registerApi = async (data: RegisterForm) => {
  try {
    const { confirmPassword, ...payload } = data;
    const res = await axios.post('https://f52e0e4bff8ca40c.mokky.dev/register', payload);
    return res.data;
  } catch (error) {
    console.log('Ошибка при регистрации');
    throw new Error('Register failed');
  }
};
