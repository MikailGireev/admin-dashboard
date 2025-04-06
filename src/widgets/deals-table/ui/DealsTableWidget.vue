<script setup lang="ts">
import { Select } from '@/shared/select';
import { Table } from '@/shared/table';
import { Typography } from '@/shared/typography';
</script>

<template>
  <div class="deals-table">
    <div class="deals-table__title">
      <Typography tag="h2">Deals</Typography>
      <Select />
    </div>
    <Table>
      <template #head>
        <tr>
          <th class="table__th">Product Name</th>
          <th class="table__th">Location</th>
          <th class="table__th">Date - Time</th>
          <th class="table__th">Piece</th>
          <th class="table__th">Amount</th>
          <th class="table__th">Status</th>
        </tr>
      </template>
    </Table>
  </div>
</template>

<style scoped lang="scss">
.deals-table {
  padding: 32px;
  background-color: #ffffff;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 35px;

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .table__th {
    padding-left: 24px;
  }
}
</style>
