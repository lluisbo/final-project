<template>
  <!--- OPEN MODAL ---->
  <button
    type="button"
    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg"
    data-modal-toggle="defaultModal"
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
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      ></path></svg
    ><span class="flex-1 ml-3 text-white whitespace-nowrap">Settings</span>
  </button>

  <div
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
  >
    <div
      class="relative p-4 w-full max-w-2xl h-full md:h-auto pt-16 pb-0 md:py-3 mx-auto mt-10 px-4 bg-green-700 flex flex-row justify-items-stretch shadow-md bg-blend-overlay"
    >
      <div class="relative w-full dark:bg-gray-700">
        <div
          class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600"
        >
          <h3
            class="text-xl font-semibold text-white lg:text-2xl dark:text-white"
          >
            Settings
          </h3>
          <!--- CLOSE MODAL ---->
          <button
            type="button"
            class="text-amber-700 bg-transparent  hover:text-white  text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <section>
          <form @submit.prevent="handleDetailsProfile" novalidate>
            <!--- AVATAR ---->
            <label
              for="website-admin"
              class="block mb-2 text-sm mt-2 font-medium text-white dark:text-gray-300"
              >Avatar</label
            >
            <div class="flex">
              <span
                class="inline-flex items-center px-3 text-sm text-white bg-gray- rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                id="username"
                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="upload a picture"
                v-model="avatar"
              />
            </div>
            <!--- USERNAME ---->
            <label
              for="website-admin"
              class="block mb-2 text-sm mt-2 font-medium text-white dark:text-gray-300"
              >Username</label
            >
            <div class="flex">
              <span
                class="inline-flex items-center px-3 text-sm text-white bg-gray- rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                id="username"
                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="PJ Harvey"
                v-model="username"
              />
            </div>
            <!---WEBSITE ---->
            <label
              for="website-admin"
              class="block mb-2 text-sm mt-2 font-medium text-white dark:text-gray-300"
              >Website</label
            >
            <div class="flex">
              <span
                class="inline-flex items-center px-3 text-sm text-white bg-gray- rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
              >
                <svg
                  class="w-6 h-6"
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
              </span>
              <input
                type="text"
                id="website"
                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="www.exemple.com"
                v-model="website"
              />
            </div>
            <article class="mt-4 mb-4">
              <button
                class="bg-amber-600 hover:bg-amber-900 text-white py-2 px-4 rounded"
              >
                Update Profile
              </button>
            </article>
          </form>
        </section>
        <section class="w-5/6 h-full px-4 flex place-content-center">
          <!--- HANDLE ERRORS ---->
          <section
            v-if="errorsMSG"
            class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
            role="alert"
          >
            <span class="flex place-content-center font-medium"
              >Error Alert!</span
            >

            <p>{{ errorsMSG }}</p>
          </section>
          <!--- Throw a success message when a user is created ---->
          <section
            v-if="isUpdate"
            class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span class="font-medium">Success alert!</span>
            <br />
            {{ isUpdate }}
          </section>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useProfileStore } from "../../store/profiles";
import { useUserStore } from "../../store/user";

const username = ref("");
const avatar = ref("");
const isUpdate = ref("");
const errorsMSG = ref("");

async function handleDetailsProfile() {
  try {
    await useProfileStore().updateProfile(
      username.value,
      website.value,
      avatar.value
    );
    // await useProfileStore().updateFile(avatar.value);
    isUpdate.value = "Your profile has been uploaded";
    setTimeout(() => {
      isUpdate.value = null;
    }, 3000);
  } catch (error) {
    errorsMSG.value = error.message;
    setTimeout(() => {
      errorsMSG.value = null;
    }, 5000);
  }
}
</script>

<style></style>
