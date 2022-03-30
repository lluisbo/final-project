<template>
  <section>
    <section>
      <Nav />
    </section>
    <section>
      <SignIn class="md:top-2" />
      <Footer class="fixed md:bottom-0 bg-white" />
    </section>
  </section>
</template>
<script setup>
import Nav from "../components/Nav.vue";
import SignIn from "../components/forms/SignIn.vue";
import Footer from "../components/Footer.vue";
</script>

<style></style>
