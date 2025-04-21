<script setup lang="ts">
import { Flag } from '@/shared/flag';
import { Icon } from '@/shared/icon';
import type { Props } from '../types/lang';
import { Typography } from '@/shared/typography';
import LanguageDropdown from '@/features/language-dropdown/ui/LanguageDropdown.vue';

defineProps<Props>();
</script>

<template>
  <div class="lang">
    <div class="lang-content">
      <Flag :url="flag" :name="flag" />
      <span
        ><Typography size="14px" tag="span">{{ title || 'English' }}</Typography>
      </span>
      <Icon class="drop-down" name="drop-down" />
    </div>
    <LanguageDropdown />
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
