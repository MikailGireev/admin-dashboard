<script setup lang="ts">
import { ref, watch } from 'vue';

import { Container } from '@/shared/container';
import { Input } from '@/shared/input';
import { Icon } from '@/shared/icon';

const inputValue = defineModel<string>();

watch(inputValue, () => {
  console.log(inputValue.value);
});
</script>

<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <Icon name="menu" />
        <Input v-model="inputValue" placeholder="Search" width="388px" class="header__input">
          <template v-slot:left--icon><Icon class="left__icon" name="search" /></template>
        </Input>
      </div>
    </Container>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 16px 0;

  &__content {
    display: flex;
    align-items: center;
  }

  .left__icon {
    position: relative;
    z-index: 10;
    top: 3px;
    left: 16px;
  }
}
</style>
