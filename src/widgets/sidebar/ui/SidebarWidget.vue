<script setup lang="ts">
import { Logo } from '@/shared/logo';
import { Typography } from '@/shared/typography';
import { Icon } from '@/shared/icon';

import { useSidebarStore } from '../model/sidebarStore';

const store = useSidebarStore();
const { pages } = store;
</script>

<template>
  <div class="sidebar">
    <Logo class="sidebar__logo" varint="light" />
    <div class="sidebar__content">
      <router-link class="sidebar__link" v-for="page in pages" :key="page.label" :to="page.path">
        <Icon width="22px" :class="page.icon" :name="page.icon" />
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
    width: 192px;
    height: 50px;
    align-items: center;
    gap: 16px;
    padding-left: 16px;
    transition: all 0.1s ease-in-out;
    border-radius: 6px;
    &:hover {
      background-color: #4880ff;
      p {
        color: #ffffff;
      }

      &:deep(.icon) {
        svg {
          fill: #ffffff;
        }
      }
    }
  }

  &__logo {
    margin-bottom: 30px;
  }
}
</style>
