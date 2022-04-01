<script setup>
import SignUp from "../components/forms/SignUp.vue";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <section>
    <section >
      <Nav />
    </section>
    <section>
      <SignUp class="md:top-2"/>
      <Footer class="fixed md:bottom-0 bg-white" />
    </section>
  </section>
</template>

<style>

</style>
