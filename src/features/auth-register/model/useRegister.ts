import { useForm } from 'vee-validate';
import type { RegisterForm } from '../types';
import { registerSchema } from './validatuin';
import { registerApi } from '../api/registerApi';

export const useRegister = () => {
  const { handleSubmit, errors, values, isSubmitting } = useForm<RegisterForm>({
    validationSchema: registerSchema,
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = handleSubmit(async (formValue) => {
    await registerApi(formValue);
  });

  return { onSubmit, errors, values, isSubmitting };
};
