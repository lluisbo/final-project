<template>
  <header class="h-10 text-amber-700">
    <nav
      clas="container py-5 px-4 flex flex-row gap-4 content-center items-center"
    >
    <section>
    </section>
      <section>
        <ul class="flex flex-1 justify-end text-sm mt-5 gap-x-10 mr-10">
          <CustomLink to="internal">Home</CustomLink>
          <CustomLink to="internal">Profile</CustomLink>
          <CustomLink to="internal">Sing up</CustomLink>
          <CustomLink to="internal">Log in</CustomLink>
        </ul>
      </section>
    </nav>
  </header>
</template>

<script setup>
import CustomLink from '../utilities/CustomLink.vue';
</script>

<style></style>
