<template>
  <!--- OPEN MODAL ---->
  <button
    @onclick="openModal = !openModal"
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
    v-bind:class="openModal ? 'show' : null"
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
  >
    <div
      class="relative p-4 w-full max-w-2xl h-full md:h-auto pt-16 pb-0 md:py-3 mx-auto mt-10 px-4 bg-amber-700 flex flex-row justify-items-stretch shadow-md bg-blend-overlay"
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
            @onclick="openModal = !openModal"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          <form @submit.prevent="createProfile" novalidate>
            <!--- AVATAR ---->

            <!--- USERNAME ---->
            <label
              for="website-admin"
              class="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >Username</label
            >
            <div class="flex">
              <span
                class="inline-flex items-center px-3 text-sm text-white bg-gray- rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
              >
                @
              </span>
              <input
                type="text"
                id="username"
                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bonnie Green"
                v-model="username"
              />
            </div>
            <!--- WEBSITE ---->
            <label
              for="website-admin"
              class="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >Website</label
            >
            <div class="flex">
              <span
                class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
              >
                @
              </span>
              <input
                type="text"
                id="website"
                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bonnie Green"
                v-model="website"
              />
              <button type="submit">Update</button>
            </div>
          </form>
        </section>
        <section></section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useProfileStore } from "../../store/profiles";


const openModal = ref(false);

async function createProfile() {
  await useProfileStore().createProfile(username.value, website.value,
  );
}
</script>

<style></style>
