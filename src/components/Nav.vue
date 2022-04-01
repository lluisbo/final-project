<template>
  <header
    class="container w-full flex flex-col gap-4 shadow-ls  font-bold sm:flex-row"
  >
    <nav
      class="container py-3 px-4 flex flex-row gap-4  sm:flex-row"
    >
      <section class="flex items-center gasp-x-4">
        <img src="../assets/logo.svg" class="w-12" />
        <h1 class="text-white text-2xl text-center pr-5 font-bold">2DoList</h1>
      </section>

      <section class="py-3">
        <ul class="absolute flex md:right-10 flex-row text-green-800 text-xl gap-x-10">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="profile">Profile</CustomLink>
          <CustomLink to="auth">Register</CustomLink>
          <CustomLink to="login">Log in</CustomLink>
        </ul>
      </section>
    </nav>
  </header>
</template>

<script setup>
import CustomLink from "../utilities/CustomLink.vue";
</script>

<style></style>
