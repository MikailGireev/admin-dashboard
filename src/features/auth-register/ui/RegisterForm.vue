<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';

import { useRegister } from '../model/useRegister';

const { submit, handleSubmit, isSubmitting } = useRegister();
</script>

<template>
  <Form class="form" @submit="handleSubmit(submit)">
    <div class="email-container form-control">
      <label for="email">Email address</label>
      <Field name="email" type="email" placeholder="Email" />
    </div>

    <div class="username-container form-control">
      <label for="username">Username</label>
      <Field name="username" type="text" placeholder="Username" />
      <ErrorMessage name="username" />
    </div>

    <div class="password-container form-control">
      <label for="password">Password</label>
      <Field name="password" type="password" placeholder="Password" />
      <ErrorMessage name="password" />
    </div>

    <div class="form-control">
      <label for="confirmPassword">Confirm Password</label>
      <Field name="confirmPassword" type="password" placeholder="Confirm Password" />
      <ErrorMessage name="confirmPassword" />
    </div>

    <button class="form-button" type="submit" :disabled="isSubmitting">Sign Up</button>
  </Form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  &-control {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &-button {
    width: 418px;
    padding: 15px 0;
    background-color: #4880ff;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:disabled {
      background-color: #d8d8d8;
      cursor: not-allowed;
    }
  }

  input {
    width: 516px;
    outline: none;
    border-radius: 8px;
    border: 1px solid #d8d8d8;
    padding: 16px;
  }

  label {
    color: #202224;
  }
}
</style>
