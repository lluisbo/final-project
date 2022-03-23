<template>
  <header class="h-10 bg-red-900 text-white ">
     <nav clas="container py-5 px-4 flex flex-row gap-4 content-center items-center">
<section>
  <ul class="flex flex-1 justify-end gap-x-10 mr-10">
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'auth'}">Sign up</router-link>
    <router-link :to="{name: 'login'}">Log in</router-link> 
    <li>Log out</li>   
  </ul>
</section>
     </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>