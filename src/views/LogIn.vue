<template>
  <section class="flex justify-center bg-gray-400">
    <img
      class="w-full h-auto justify-items-center md:top-50 bg-gray-400"
      src="../assets/homeIMG.svg"
    />
  </section>
  <Nav />
  <SignIn />
  <Footer />
</template>
<script setup>
import Nav from "../components/Nav.vue";
import SignIn from "../components/forms/SignIn.vue";
import Footer from "../components/Footer.vue";
</script>

<style></style>
