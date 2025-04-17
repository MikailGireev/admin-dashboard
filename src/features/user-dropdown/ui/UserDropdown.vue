<script setup lang="ts">
import { Icon } from '@/shared/icon';
import { Typography } from '@/shared/typography';
import { useUserDropdownStore } from '../model/userDropdownStore';
import { storeToRefs } from 'pinia';

const store = useUserDropdownStore();
const { cardItems } = storeToRefs(store);
</script>

<template>
  <div class="user-dropdown">
    <div class="user-dropdown__content">
      <div v-for="card in cardItems" :key="card.title" class="user-dropdown__card">
        <router-link :to="card.link"
          ><Icon size="17px" :name="card.img" />
          <Typography color="primary" size="14px" tag="span">{{
            card.title
          }}</Typography></router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-dropdown {
  position: absolute;
  top: 100%;
  left: -20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

  width: 205px;
  border-radius: 14px;
  background-color: #ffffff;

  &__content {
    display: flex;
    flex-direction: column;
    padding: 12px 20px;
  }

  &__card {
    position: relative;
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background-color: #d8d8d8;
    }
  }
}
</style>
