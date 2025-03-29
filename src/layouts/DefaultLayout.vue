<script setup lang="ts">
import { Typography } from '@/shared/typography';

import { Sidebar } from '@/widgets/sidebar';
</script>

<template>
  <div class="layout">
    <div class="layout__sidebar">
      <aside>
        <Sidebar />
      </aside>
    </div>
    <div class="layout__main">
      <header class="header">
        <Typography tag="h1" color="primary">Hello</Typography>
      </header>
      <main class="main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;

  .layout__sidebar {
    max-width: 240px;
    width: 100%;
    height: 100vh;
  }
}
</style>
