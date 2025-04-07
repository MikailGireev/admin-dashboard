<script setup lang="ts">
import { Logo } from '@/shared/logo';
import { Typography } from '@/shared/typography';
import { Icon } from '@/shared/icon';

import { useSidebarStore } from '../model/sidebarStore';

import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import router from '@/app/router';

const path = computed(() => router.currentRoute.value.path);

const store = useSidebarStore();
const { mainMenu, pages } = storeToRefs(store);
</script>

<template>
  <div class="sidebar">
    <Logo class="sidebar__logo" varint="light" />
    <div class="sidebar__content">
      <router-link
        :class="`sidebar__link ${path === page.path ? 'active' : ''}`"
        v-for="page in mainMenu"
        :key="page.label"
        :to="page.path"
      >
        <Icon width="22px" :class="page.icon" :name="page.icon" />
        <Typography tag="p" color="primary">{{ page.label }}</Typography>
      </router-link>
      <hr class="sidebar__line" />
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

  &__line {
    margin: 16px 0;
    background-color: #e0e0e0;
    width: 220px;
  }

  &__link {
    position: relative;
    display: flex;
    width: 192px;
    height: 50px;
    align-items: center;
    gap: 16px;
    padding-left: 16px;
    transition: background-color 0.1s ease-in-out;
    border-radius: 6px;

    &::before {
      content: '';
      position: absolute;
      left: -10px;
      top: 8px;
      bottom: 8px;
      width: 4px;
      border-radius: 2px;
      background-color: transparent;
      transition: background-color 0.2s ease;
    }

    &:hover {
      background-color: #4880ff;
      p {
        color: #ffffff;
      }

      &::before {
        background-color: #4880ff;
      }

      &:deep(.icon) {
        svg {
          fill: #ffffff;
        }
      }
    }
  }

  .active {
    background-color: #4880ff;
    p {
      color: #ffffff;
    }

    &::before {
      background-color: #4880ff;
    }

    &:deep(.icon) {
      svg {
        fill: #ffffff;
      }
    }
  }

  &__logo {
    margin-bottom: 30px;
  }
}
</style>
