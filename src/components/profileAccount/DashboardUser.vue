<template>
  <section>
    <aside class="w-56 h-full" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 bg-green-700 dark:bg-gray-800">
        <ul class="space-y-4">
          <!-- DASHBOARD NAV --->
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
          <!-- USERNAME --->
          <li>
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
            <span
             
              class="flex-1 ml-3 text-white whitespace-nowrap"
              >{{ data }}</span
            >
          </li>
          <!-- TASKS --->
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
              <span class="flex-1 ml-3 text-white whitespace-nowrap"
                >Tasks</span
              >
            </a>
          </li>
          <!-- FORM TO UPDATE PROFILE DETAILS --->
          <li class="flex flex-row" @click="update">
            <UpdateProfile />
          </li>
          <!-- LOG OUT --->
          <li class="flex flex-row">
            <SignOut />
          </li>
        </ul>
      </div>
    </aside>
  </section>
</template>

<script setup>
import { ref } from "vue";
import UpdateProfile from "./UpdateProfile.vue";
import SignOut from "../forms/SignOut.vue";
import { useProfileStore } from "../../store/profiles";
import { useUserStore } from "../../store/user";
import { supabase } from "../../supabase";

const data = ref(null)
const dataLoaded = ref(null);

async function nickName() {
const username = await useProfileStore().profiles.username;
data.value = profiles.username;
}
</script>
<style></style>
