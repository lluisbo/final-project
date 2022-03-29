<template>
  <header class="h-10 text-green-700">
    <nav
      clas="container py-5 px-4 flex flex-row gap-4 content-center items-center"
    >
    <section>
    </section>
      <section>
        <ul class="flex flex-1 justify-end text-sm mt-5 gap-x-10 mr-10">
          <CustomLink to="home">Home</CustomLink>
          <CustomLink to="profile">Profile</CustomLink>
          <CustomLink to="auth">Register</CustomLink>
          <CustomLink to="login">Log in</CustomLink>
        </ul>
      </section>
    </nav>
  </header>
</template>

<script setup>
import CustomLink from '../utilities/CustomLink.vue';
</script>

<style></style>
