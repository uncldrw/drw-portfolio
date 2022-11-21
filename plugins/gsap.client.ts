import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("gsap", gsap);

  gsap.registerPlugin(ScrollTrigger);
});
