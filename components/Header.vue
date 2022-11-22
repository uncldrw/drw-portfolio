<template>
  <header
    class="fixed top-0 bg-opacity-100 lg:bg-opacity-95 flex w-full duration-300 delay-[60] z-[70] flex-col"
  >
    <div
      class="h-14 flex justify-between items-center w-full px-4 md:px-14 z-50"
    >
      <span class="text-primary text-xl font-medium">
        byjay<span class="text-secondary">.</span>
      </span>
      <span class="relative">
        <svg
          @click="menuStore.toggleMenu"
          class="w-8 fill-primary cursor-pointer"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
            fill-rule="nonzero"
          />
        </svg>
      </span>
    </div>
    <hr id="headerBorderEl" class="border-[#33332D] transition-all z-50" />
    <Transition name="menu"> <Menu v-if="menuStore.open" /></Transition>
    <div
      class="top-0 left-0 h-14 absolute bg-black backdrop-blur-xl w-full"
    ></div>
  </header>
</template>

<script setup>
import { useMenuStore } from "~/stores/MenuStore";
const { $gsap } = useNuxtApp();

const menuStore = useMenuStore();

// watch(menuStore, (value) => {
//   if (value.open) {
//     $gsap.to("#headerBorderEl", {
//       width: "0%",
//       duration: 0.3,
//       ease: "none",
//     });
//   } else {
//     $gsap.to("#headerBorderEl", {
//       width: "100%",
//       duration: 0.3,
//       ease: "none",
//     });
//   }
// });
</script>

<style scoped>
.menu-icon {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
