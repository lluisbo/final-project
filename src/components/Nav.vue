<template>
  <header class="text-green-700">
    <nav
      clas="container py-5 px-4 flex flex-row gap-4 items-center sm:flex-row"
    >
    <section class="flex items-center gasp-x-4">
       <img src="../assets/logo.svg" class="w-10" />
       <h1>2DoList</h1>
    </section>
   
      <section>
        <ul class="flex flex-1 justify-end text-sm gap-x-10 mr-10">
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
