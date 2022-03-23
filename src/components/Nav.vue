<template>
  <header class="h-10 bg-amber-700 text-white">
    <nav
      clas="container py-5 px-4 flex flex-row gap-4 content-center items-center"
    >
      <section>
        <ul class="flex flex-1 justify-end gap-x-10 mr-10">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'auth' }">Sign up</router-link>
          <router-link :to="{ name: 'login' }">Log in</router-link>
        </ul>
      </section>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
