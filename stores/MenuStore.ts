import { defineStore } from "pinia";

export const useMenuStore = defineStore("Menu", {
  state: () => ({
    open: false,
  }),
  actions: {
    toggleMenu() {
      this.open = !this.open;
    },
  },
});
