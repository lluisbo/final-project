<template>
  <section class="flex flex-row">
    <button
      @Click="signOut"
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
    <section class="w-5/6 h-full px-4 flex place-content-center">
      <!--- HANDLE ERRORS ---->
      <section
        v-if="errorsMSG"
        class="absolute p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
        role="alert"
      >
        <span class="flex place-content-center font-medium">Error Alert!</span>

        <p>{{ errorsMSG }}</p>
      </section>
      <!--- Throw a success message when a user is created ---->
      <section
        v-if="isLoggedOut"
        class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        <span class="font-medium">Success alert!</span>
        <br />
        {{ isLoggedOut }}
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../../store/user";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedOut = ref(null);
//const user = useUserStore().fetchUser(email.value);

async function signOut() {
  await useUserStore().signOut();
  isLoggedOut.value = "See you soon!";
  setTimeout(() => {
    router.push({ path: "/login" });
  }, 2000);
}
</script>

<style></style>
