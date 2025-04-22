<script setup lang="ts">
import { Select } from '@/shared/select';
import { Table } from '@/shared/table';
import { Typography } from '@/shared/typography';
import { useDealsTabelStore } from '../model/dealsStore';
import { storeToRefs } from 'pinia';

const storeDeals = useDealsTabelStore();
const { deals } = storeToRefs(storeDeals);
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
      <template #body>
        <tr class="deal" v-for="deal in deals" :key="deal.productName">
          <td class="product-name table__th">
            <img :src="deal.img" :alt="deal.productName" />
            <Typography color="primary" size="14px" tag="span">{{ deal.productName }}</Typography>
          </td>
          <td class="table__th">
            <Typography size="14px" tag="span">{{ deal.location }}</Typography>
          </td>
          <td class="table__th">
            <Typography size="14px" tag="span">{{ deal.date }} - {{ deal.time }} РМ</Typography>
          </td>
          <td class="table__th">
            <Typography size="14px" tag="span">{{ deal.piece }}</Typography>
          </td>
          <td class="table__th">
            <Typography size="14px" tag="span">${{ deal.amount }}</Typography>
          </td>
          <td class="table__th">
            <Typography :class="`${deal.status}`" size="14px" tag="span">{{
              deal.status
            }}</Typography>
          </td>
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

  .deal {
    text-align: left;
    border-bottom: 1px solid #d8d8d8;
  }

  .delivered {
    padding: 4px 14px;
    background-color: #00b69b;
    border-radius: 13.5px;
    color: #ffffff;
  }

  .pending {
    padding: 4px 14px;
    background-color: #fcbe2d;
    border-radius: 13.5px;
    color: #ffffff;
  }

  .rejected {
    padding: 4px 14px;
    background-color: #fd5454;
    border-radius: 13.5px;
    color: #ffffff;
  }

  .table__th {
    padding: 16px 24px;
  }

  .product-name {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
