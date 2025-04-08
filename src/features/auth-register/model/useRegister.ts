import { useForm } from 'vee-validate';
import type { RegisterForm } from '../types';
import { registerSchema } from './validatuin';
import { registerApi } from '../api/registerApi';

export const useRegister = () => {
  const { handleSubmit, isSubmitting } = useForm<RegisterForm>({
    validationSchema: registerSchema,
  });

  const submit = async (values: RegisterForm) => {
    console.log(values);
    await registerApi(values);
  };

  return {
    submit,
    handleSubmit,
    isSubmitting,
  };
};
