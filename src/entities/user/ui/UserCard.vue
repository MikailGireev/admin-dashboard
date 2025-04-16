<script setup lang="ts">
import { Avatar } from '@/shared/avatar';
import { Icon } from '@/shared/icon';
import { Typography } from '@/shared/typography';
import type { Props } from '../types/userCard';
import { useUserStore } from '../model/userStore';
import UserDropdown from '@/features/user-dropdown/ui/UserDropdown.vue';

defineProps<Props>();

const store = useUserStore();
const { user } = store;
</script>

<template>
  <div class="user">
    <Avatar :url="urlImg" :role="role" />
    <div class="user__title">
      <Typography size="14px" tag="span">{{ user?.name }}</Typography>
      <Typography size="12px" tag="span">{{ user?.role }}</Typography>
    </div>
    <Icon class="drop-down" name="drop-down" />
    <UserDropdown />
  </div>
</template>

<style scoped lang="scss">
.user {
  display: flex;
  gap: 16px;
  align-items: center;
  position: relative;

  &__title {
    display: flex;
    flex-direction: column;
  }

  .drop-down {
    border-radius: 50%;
    padding: 0 5px;
    border: 1px solid #5c5c5c;
    cursor: pointer;
  }

  .avatar-admin {
    border-radius: 50%;
  }
}
</style>
