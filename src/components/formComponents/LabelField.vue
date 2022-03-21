<template>
  <section class="py-2">
      <label class="text-white font-bold py-2 px-4" for="For">
          <slot />
      </label>
  </section>
</template>

<script setup>

defineProps({
 For: String,
})

</script>

<style>

</style>