<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <section class="relative">
    <section class="absolute md:right-0 md:top-2 z-40">
      <Nav />
    </section>
    <section class="flex justify-center bg-gray-400">
      <img
        class="w-full h-auto justify-items-center md:top-50 bg-gray-400"
        src="../assets/homeIMG.svg"
      />
      <Footer class="fixed md:bottom-3" />
    </section>
  </section>
</template>

<style></style>
