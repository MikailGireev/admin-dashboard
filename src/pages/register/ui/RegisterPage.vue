<script setup lang="ts">
import RegisterForm from '@/features/auth-register/ui/RegisterForm.vue';
import { Typography } from '@/shared/typography';
</script>

<template>
  <div class="register">
    <div class="register-form">
      <div class="register-form__title">
        <Typography tag="h1">Create an Account</Typography>
        <Typography color="primary" tag="span">create a account to continue</Typography>
      </div>
      <RegisterForm />
    </div>
  </div>
</template>

<style scoped lang="scss">
.register {
  display: flex;
  flex-direction: column;
  height: 100%;

  &-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 120px auto;
    padding: 60px 0;
    width: 630px;
    background-color: #fff;
    border-radius: 24px;
  }

  &-form__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    gap: 15px;
  }
}
</style>
