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
        <Icon :name="card.img" />
        <Typography size="14px" tag="span">{{ card.title }}</Typography>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-dropdown {
  position: absolute;
  top: 100%;
  left: 0;

  max-width: 205px;
  width: 100%;
  background-color: #ffffff;

  &__content {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 12px;
  }

  &__card {
    width: 100%;
    height: 42px;
    display: flex;
    gap: 10px;
    cursor: pointer;
    align-items: center;
  }
}
</style>
