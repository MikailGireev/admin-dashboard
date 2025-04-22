import { defineStore } from 'pinia';
import type { Deals } from '.';
import { ref } from 'vue';

export const useDealsTabelStore = defineStore('deals-table', () => {
  const deals = ref<Deals[]>([
    {
      img: '/products/apple-watch.png',
      productName: 'Apple Watch',
      location: '6096 Marjolaine Landing',
      date: '12.09.2019',
      time: '12.53',
      piece: 423,
      amount: 34.295,
      status: 'delivered',
    },
    {
      img: '/products/apple-watch.png',
      productName: 'Apple Watch',
      location: '6096 Marjolaine Landing',
      date: '12.09.2019',
      time: '12.53',
      piece: 423,
      amount: 34.295,
      status: 'pending',
    },
    {
      img: '/products/apple-watch.png',
      productName: 'Apple Watch',
      location: '6096 Marjolaine Landing',
      date: '12.09.2019',
      time: '12.53',
      piece: 423,
      amount: 34.295,
      status: 'rejected',
    },
  ]);

  return { deals };
});
