<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLangDropdownStore } from '../model/languageDropdownStore';
import { Typography } from '@/shared/typography';
import { Icon } from '@/shared/icon';

const storeLang = useLangDropdownStore();
const { cards } = storeToRefs(storeLang);
</script>

<template>
  <div class="language-dropdown">
    <div class="language-dropdown__content">
      <div class="language-dropdown__title">
        <Typography size="15px" tag="span">Select Language</Typography>
      </div>
      <div v-for="card in cards" :key="card.title" class="language-dropdown__cards">
        <div class="language-dropdown__card">
          <div class="card-content">
            <img :src="card.img" :alt="card.title" />
            <Typography size="14px" tag="span">{{ card.title }}</Typography>
          </div>
          <Icon v-if="card.select" name="check" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.language-dropdown {
  position: absolute;
  top: 100%;
  left: -80px;
  background-color: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 1;
  padding: 20px;
  border-radius: 14px;

  &__card {
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: space-between;

    width: 254px;
    height: 60px;
  }

  &__title {
    height: 40px;
    
    position: relative;
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #d8d8d8;
    }
  }

  .card-content {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
