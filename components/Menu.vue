<template>
  <nav
    class="fixed top-0 left-0 w-full h-screen bg-secondary md:px-14 flex items-end z-40"
    id="navEl"
  >
    <ul id="navigationListEl">
      <li>
        <span class="text-6xl">Startseite</span>
        <hr />
      </li>
      <li>
        <span class="text-6xl">Portfolio</span>
        <hr />
      </li>
      <li>
        <span class="text-6xl whitespace-nowrap">Über Mich</span>
        <hr />
      </li>
      <li>
        <span class="text-6xl">Kontakt</span>
        <hr />
      </li>
    </ul>
    <div class="text-right text-primary text-sm whitespace-nowrap">
      <p>Datenschutz | Impressum</p>
    </div>
  </nav>
</template>

<script setup>
import { useMenuStore } from "~/stores/MenuStore";
const { $gsap } = useNuxtApp();

const menuStore = useMenuStore();

onBeforeUnmount(() => {
  console.log(1);
  const navEl = document.querySelector("#navEl");

  $gsap.fromTo(
    navEl,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.3,
    }
  );
});

onMounted(() => {
  const navEl = document.querySelector("#navEl");
  const navigationListEl = document.querySelector("#navigationListEl");

  $gsap.from(navEl, {
    opacity: 0,
    duration: 0.1,
  });

  navigationListEl.childNodes.forEach((element, i) => {
    $gsap.fromTo(
      element,
      {
        opacity: 0,
        xPercent: -2,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 0.25,
        delay: 0.125 * i + 0.15,
      }
    );
  });
});
</script>

<style scoped lang="scss">
ul {
  @apply space-y-6 flex flex-col w-full;
  li {
    @apply text-primary font-semibold flex w-full items-center cursor-pointer max-w-sm;
    hr {
      @apply w-full border-primary  inline-flex transition-all duration-200 ml-8 border-4 scale-x-0 translate-x-1/2;
    }
    &:hover {
      hr {
        @apply scale-x-100 translate-x-0;
      }
    }
  }
}
</style>
