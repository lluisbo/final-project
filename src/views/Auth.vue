<script setup>
import { ref } from "vue";
import SignUp from "../components/forms/SignUp.vue";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<template>

  <section class="bg-gray-100" style="background-image: url('../assets/signInIMG.jpeg');
  background-position: center;
  ">
    <section>
      <Nav />
    </section>
    <section>
      <SignUp />
    </section>
    <Footer class="fixed md:bottom-0 bg-white" />
  </section>
</template>

<style></style>
