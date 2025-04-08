<script setup lang="ts">
import { useRegister } from '../model/useRegister';

const { submit } = useRegister();
</script>

<template>
  <form class="form" @submit.prevent="submit">
    <div class="email-container form-control">
      <label for="email">Email address</label>
      <input name="email" type="email" placeholder="Email" />
    </div>

    <div class="username-container form-control">
      <label for="username">Username</label>
      <input name="username" type="text" placeholder="Username" />
    </div>

    <div class="password-container form-control">
      <label for="password">Password</label>
      <input name="password" type="password" placeholder="Password" />
    </div>

    <button class="form-button" type="submit">Sign Up</button>
  </form>
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
