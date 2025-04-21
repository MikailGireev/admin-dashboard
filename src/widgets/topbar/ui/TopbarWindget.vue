<script setup lang="ts">
import { watch } from 'vue';

import { Container } from '@/shared/container';
import { Input } from '@/shared/input';
import { Icon } from '@/shared/icon';
import { Notification } from '@/shared/notification';

import { Lang } from '@/entities/lang';
import { User, useUserStore } from '@/entities/user';

const inputValue = defineModel<string>();

watch(inputValue, () => {
  console.log(inputValue.value);
});

const store = useUserStore();
const { setUser } = store;

setUser({
  name: 'Moni Roy',
  role: 'Admin',
});
</script>

<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <div class="header__left">
          <Icon class="menu" name="menu" />
          <Input v-model="inputValue" placeholder="Search" width="388px" class="header__input">
            <template v-slot:left--icon><Icon class="left__icon" name="search" /></template>
          </Input>
        </div>

        <div class="header__right">
          <Notification />
          <Lang flag="/flags/english-flag.svg" title="English" />
          <User name="Moni Roy" url-img="/avatar/admin.jpeg" role="admin" />
        </div>
      </div>
    </Container>
  </header>
</template>

<style scoped lang="scss">
.header {
  height: 70px;
  display: flex;
  align-items: center;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .left__icon {
    position: relative;
    z-index: 10;
    top: 3px;
    left: 16px;
  }

  .menu {
    cursor: pointer;
  }
}
</style>
