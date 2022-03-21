<template>
  <section class="px-4">
       <button  @click="onClick" class="bg-red-500 hover:bg-red-400 text-white .font-bold py-2 px-4 rounded">
            <slot />
          </button>
  </section>
</template>

<script setup>
defineProps({
    onClick:{
        type: Function,
        require: true,

    }
})
</script>

<style>

</style>