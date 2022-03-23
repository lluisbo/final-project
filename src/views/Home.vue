<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  
  <section class="relative">
      <section class="md:absolute md:right-0 md:top-5 z-40" >
      <Nav />
      </section>
       <section>
        
       </section>
      <section>
     <img
        class="h-3/4 object-cover grayscale"
        src="../assets/flat-lay-notebook-with-list-desk.jpeg"
      />
      <h1 class="uppercase md:absolute md:bottom-0 md:left-0 md:right-0 md:top-5 z-40">2 Do List gives you focus from work to play</h1>
      </section>
      <section class="relative">
       <Footer />
       </section>
  </section>
</template>

<style></style>