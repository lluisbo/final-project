<template>
  <section class="w-72">
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
        <!-- Avatar --->
        <li class="flex flex-row">
          <img class="w-fit h-full rounded-2xl" :src="avatar" alt="avatar" />
        </li>
        <!-- USERNAME --->
        <li class="flex flex-row">
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
          <span class="flex-1 ml-3 text-white whitespace-nowrap">{{
            user
          }}</span>
        </li>
        <!-- WEBSITE --->
        <li>
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
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            ></path>
          </svg>
          <CustomLink
            to=""
            class="flex-1 ml-3 text-white whitespace-nowrap"
            >{{ website }}</CustomLink
          >
        </li>
        <!-- CALENDAR --->
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>

            <span class="flex-1 ml-3 text-white whitespace-nowrap"
              >Calendar</span
            >
          </a>
        </li>
        <!-- TASKS --->
        <li>
          <a
            href="profile/task"
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
  </section>
</template>

<script setup>
import { ref } from "vue";
import UpdateProfile from "./UpdateProfile.vue";
import SignOut from "../forms/SignOut.vue";
import { useProfileStore } from "../../store/profiles";
import { useUserStore } from "../../store/user";
import CustomLink from "../../utilities/CustomLink.vue";

const data = ref("");
const user = ref("");
const avatar = ref("");
const website = ref("");

async function getProfile() {
  const myUser = await useProfileStore().fetchProfile();
  data.value = myUser[0];
  user.value = myUser[0].username;
  avatar.value = myUser[0].avatar_url;
  website.value = myUser[0].website;
}

getProfile();
</script>
<style></style>
