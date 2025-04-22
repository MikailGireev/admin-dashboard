<script setup lang="ts">
import { Flag } from '@/shared/flag';
import { Icon } from '@/shared/icon';
import type { Props } from '../types/lang';
import { Typography } from '@/shared/typography';
import LanguageDropdown from '@/features/language-dropdown/ui/LanguageDropdown.vue';
import { useLangDropdownStore } from '@/features/language-dropdown/model/languageDropdownStore';
import { storeToRefs } from 'pinia';

defineProps<Props>();

const storeDropdown = useLangDropdownStore();
const { isShow } = storeToRefs(storeDropdown);
const { setShow } = storeDropdown;
</script>

<template>
  <div class="lang">
    <div class="lang-content">
      <Flag :url="flag" :name="flag" />
      <span
        ><Typography size="14px" tag="span">{{ title || 'English' }}</Typography>
      </span>
      <Icon @click="setShow" class="drop-down" name="drop-down" />
    </div>
    <LanguageDropdown v-if="isShow" />
  </div>
</template>

<style scoped lang="scss">
.lang {
  display: flex;
  position: relative;

  &-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .drop-down {
    cursor: pointer;
  }
}
</style>
