<template>
  <section>
    <!--- HANDLE ERRORS ---->
    <div v-if="errorsMSG" class="w-full h-auto text-white text-sm font-medium">
      <p>{{ errorsMSG }}</p>
    </div>
    <!--- ALERT LOGOUT ---->
    <div v-if="IsLogOut" class="w-full h-auto text-white text-sm font-medium">
      <span>{{ IsLogOut }}</span>
    </div>
  </section>
  <button
    @submit.prevent="signOut"
    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer"
    type="button"
  >
    <svg
      class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      ></path></svg
    ><span class="flex-1 ml-3 text-white whitespace-nowrap">Log out</span>
  </button>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";


const IsLogOut = ref(null);
const errorsMSG = ref(null);
const router = useRouter();

const signOut = async () => {
  try {
    let { error } = await useUserStore().signOut();
    if (error) throw error;
    IsLogOut.value = "See you soon!";
    setTimeout(() => {
      router.push({ name: "login" });
    }, 2000);
  } catch (error) {
    errorsMSG.value = error.message;
    setTimeout(() => {
      errorsMSG.value = null;
    }, 2000);

    return { signOut };
  }
};
</script>

<style></style>
