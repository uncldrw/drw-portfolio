<template>
  <header
    class="h-14 border-b border-b-[#33332D] fixed top-0 z-50 w-full bg-black backdrop-blur-xl bg-opacity-100 lg:bg-opacity-95 px-4 md:px-14 justify-between items-center flex"
  >
    <span class="text-primary text-xl font-medium">
      byjay<span class="text-secondary">.</span>
    </span>
    <span @click="menuStore.toggleMenu" class="cursor-pointer">
      <svg
        class="w-8 fill-primary"
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
    <div v-if="menuStore.open">
      <h1 class="text-5xl">OPEN</h1>
    </div>
  </header>
</template>

<script setup>
import { useMenuStore } from "~/stores/MenuStore";

const menuStore = useMenuStore();
</script>

<style></style>
