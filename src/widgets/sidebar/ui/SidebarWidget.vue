<script setup lang="ts">
import { Logo } from '@/shared/logo';
import { useSidebarStore } from '../model/sidebarStore';
import { Typography } from '@/shared/typography';
import { Icon } from '@/shared/icon';

const store = useSidebarStore();
const { pages } = store;
</script>

<template>
  <div class="sidebar">
    <Logo varint="light" />
    <div class="sidebar__content">
      <router-link class="sidebar__link" v-for="page in pages" :key="page.label" :to="page.path">
        <Icon :class="page.icon" :name="page.icon" />
        <Typography tag="p" color="primary">{{ page.label }}</Typography>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__link {
    display: flex;
    gap: 16px;
  }
}
</style>
