<script setup lang="ts">
import { Sidebar } from '@/widgets/sidebar';
import { Topbar } from '@/widgets/topbar';
</script>

<template>
  <div class="layout">
    <div class="layout__sidebar">
      <aside>
        <Sidebar />
      </aside>
    </div>
    <div class="layout__main">
      <Topbar />
      <main class="main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  width: 100%;

  &__main {
    flex: 1;
  }

  .layout__sidebar {
    max-width: 240px;
    width: 100%;
    height: 100vh;
  }

  .main {
    background-color: #f5f6fa;
  }
}
</style>
