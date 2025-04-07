import * as yup from 'yup';

export const registerSchema = yup.object({
  email: yup.string().required('Email is required').email('Email must be valid'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  username: yup.string().required('Username is required'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
