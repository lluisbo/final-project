<!--- External and Internal Navigation  <router-link> && <a>---->
<!--CustomLink to="/">This is and exemple</!--CustomLink>--->
<template>
  <a v-if="customLink ? 'href' : null " :href="to"><slot /></a>
  <router-link v-else v-bind="$props"><slot /></router-link>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

defineProps({ ...RouterLink.props });
function customLink() {
  return typeof this.to === "string" && this.to.startsWith("http") && this.to.startwith("mailto:");
}
</script>

<style></style>
