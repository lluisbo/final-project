<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <section class="relative">
    <section>
      <Nav />
    </section>

    <section>
      <img class="w-full h-auto" src="../assets/homeIMG.svg" />
      <Footer class="fixed md:bottom-0" />
    </section>
  </section>
</template>

<style></style>
