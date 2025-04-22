import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { LangCard } from '.';

export const useLangDropdownStore = defineStore('lang-dropdown', () => {
  const isShow = ref<boolean>(false);

  const cards = ref<LangCard[]>([
    { title: 'English', img: './flags/english-flag.svg', select: true },
    { title: 'French', img: './flags/french-flag.svg', select: false },
    { title: 'Spanish', img: './flags/spanish-flag.svg', select: false },
  ]);

  const setShow = () => {
    isShow.value = !isShow.value;
  };

  return { cards, isShow, setShow };
});
