<template>
  <section>
       <button type="Type" @click="onClick">
            <slot />
          </button>
  </section>
</template>

<script setup>
defineProps({
    onClick: '',
    Type: '',
})

</script>

<style>

</style>