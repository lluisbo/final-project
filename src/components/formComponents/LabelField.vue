<template>
  <section>
      <label for="For">
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