<template>
  <div data-scroll-container class="relative overflow-x-hidden">
    <Header />
    <Menu />
    <main class="flex justify-center flex-col pt-10">
      <section
        data-scroll-section
        class="w-full px-4 md:px-14 space-y-32 py-8 z-20 bg-black"
      >
        <div>
          <h1
            class="text-primary text-5xl lg:text-8xl 2xl:text-9xl font-semibold"
          >
            <span>Konzept. Design.</span> <br />
            <span class="text-secondary">Umsetzung.</span>
          </h1>
        </div>
        <div
          class="flex items-start md:items-end justify-between flex-col-reverse md:flex-row"
        >
          <div class="text-primary text-xl lg:text-2xl font-thin mt-8 lg:mt-0">
            <span class="italic">Ich bin </span
            ><span class="font-medium">kreativ</span>
          </div>
          <div class="text-primary text-2xl font-thin">
            <p class="font-extralight text-base max-w-sm">
              Hi`,` mein Name ist <span class="font-semibold">Jason</span
              ><br /><br />
              Ich bin ein Webentwickler aus Nordrhein-Westfalen. Mich fasziniert
              Design und das Handwerk dahinter Geschichten mit Form und
              Funktionen zu erzählen.
            </p>
          </div>
        </div>
      </section>
      <section data-scroll-section class="cursor-not-allowed">
        <div class="h-[75vh] overflow-hidden lg:hidden" />
        <div
          class="h-screen w-screen bg-secondary overflow-hidden _ctn fixed top-0 z-10 lg:static"
        >
          <div
            data-scroll
            data-scroll-speed="-6"
            class="w-full h-full _img grid place-content-center"
          ></div>
        </div>
      </section>
      <section
        data-scroll-section
        class="py-8 lg:py-12 w-full px-4 md:px-14 space-y-32 z-20 bg-black"
      >
        <div>
          <div class="lg:mb-48 2xl:mb-64">
            <h1
              class="text-primary text-3xl lg:text-7xl 2xl:text-8xl font-semibold"
            >
              Dac Kinh Luan Hoang.
            </h1>
            <p
              class="text-2xl lg:text-4xl 2xl:text-5xl text-secondary font-medium italic"
            >
              <span>(geb. Jason)</span>
            </p>
          </div>
          <span
            class="flex w-8 h-8 items-center justify-center rounded-full text-3xl rotate-90 text-secondary select-none cursor-pointer"
          >
            ➔</span
          >
          <hr class="border-[#33332D] my-8" />
          <div
            class="flex justify-between text-lg text-primary font-light lg:flex-row flex-col"
          >
            <span class="mb-8 font-semibold italic">Vorwort.</span>
            <span class="max-w-xl"
              >We help startups and established businesses to develop new
              digital products, and streamline existing customer-facing online
              services, by researching and developing delightful and valuable
              user experiences, and engineering highly efficient
              web-and-mobile-native apps.
            </span>
          </div>
        </div>
      </section>
      <section data-scroll-section class="bg-black z-20">
        <div class="w-full h-[80vh] bg-black"></div>
      </section>
    </main>
  </div>
</template>

<script setup>
const { $LocomotiveScroll } = useNuxtApp();

onMounted(() => {
  const scroll = new $LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    getDirection: true,
    multiplier: 0.6,
  });
});
</script>

<style scoped>
._img {
  background: url("./assets/img/hero.jpg");
  background-size: cover;
  background-position: center;
}
</style>
