<template>
  <aside class="w-64 h-full" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-amber-700 dark:bg-gray-800">
      <ul class="space-y-4">
        <li class="flex flex-row">
          <svg
            class="w-6 h-6 text-white transition duration-75 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
          </svg>
          <h1 class="ml-3 text-white font-bold uppercase">Dashboard</h1>
        </li>
        <li>
          <img
            class="w-fit h-full rounded-2xl"
            src="../../assets/lluis-avatar.jpg"
            alt="avatar"
          />
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg"
          >
            <svg
              class="w-6 h-6 text-white transition duration-75 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3 text-white whitespace-nowrap"
              >Lluis B.</span
            >
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg"
          >
            <svg
              class="w-6 h-6 text-white transition duration-75 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              ></path>
            </svg>
            <span class="flex-1 ml-3 text-white whitespace-nowrap">Tasks</span>
          </a>
        </li>
        <li class="flex flex-row">
          <SettingsForm></SettingsForm>
        </li>
        <li class="flex flex-row">
          <button
            @onclick="signOut"
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
            ><span class="flex-1 ml-3 text-white whitespace-nowrap"
              >Log out</span
            >
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
/* Settings*/ 
import SettingsForm from "./UpdateForm.vue";

import { ref } from "vue";
import { supabase } from "../../supabase";
import { useRouter } from "vue-router";

/* SIGN OUT */ 
const errorsMSG = ref(null);
const router = useRouter();
const signOut = async () => {
  try {
    let { error } = await supabase.auth.signOut({});
    if (error) throw error;
    router.push({ name: "login" });
  } catch (error) {
    errorsMSG.value = 'Something went wrong';
    setTimeout(() => {
      errorsMSG.value = null;
    }, 5000);

    return { signOut, errorsMSG };
  }
};
</script>
<style></style>
