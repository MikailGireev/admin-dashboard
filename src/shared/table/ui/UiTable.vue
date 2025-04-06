<script setup lang="ts"></script>

<template>
  <table class="table">
    <thead class="table__head">
      <slot name="head"></slot>
    </thead>
    <tbody class="table__body">
      <slot name="body"></slot>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.table {
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 12px;

  &__head {
    height: 48px;
    background-color: #f1f4f9;
    border-radius: 12px;
    text-align: left;
  }

  th,
  td {
    white-space: nowrap;
  }
}
</style>
