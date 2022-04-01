<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);


</script>

<template>
  <section>
    <router-view class="app-main" />
    <!-- your routes will load inside of these tags -->
  </section>
</template>
