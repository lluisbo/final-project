<template>
  <section
    class="relative pt-16 pb-0 md:py-3 w-5/6 mx-auto mt-10 px-4 bg-amber-700 flex flex-row justify-items-stretch shadow-md bg-blend-overlay"
  >
    <section class="w-5/6 h-full px-4">
      <!--- HANDLE ERRORS ---->
      <section
        v-if="errorsMSG"
        class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
        role="alert"
      >
        <span class="font-medium">Danger alert!</span>
        <p>{{ errorsMSG }}</p>
      </section>
    </section>
    <section
      class="hidden p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span class="font-medium">Success alert!</span> Change a few things up and
      try submitting again.
    </section>
    <section>
      <!--- SIGN UP FORM ---->
      <form @submit.prevent="signUp" novalidate>
        <h1 class="mb-4 text-3xl text-white font-bold">CREATE YOUR ACCOUNT</h1>
        <!--- Email ----->
        <label
          for="email-adress-icon"
          class="block mb-2 text-sm font-medium text-white"
          >Your Email</label
        >
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-amber-900"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="email"
            class="text-sm py-2.5 px-5 pl-10 p-2.5 rounded w-80 border-2 border-amber-900 focus:outline-none"
            placeholder="Enter your email address"
            required
            autocomplete="off"
            v-model="email"
          />
        </div>

        <!--- Password ----->
        <label for="password" class="block mb-2 text-sm font-medium text-white"
          >Password</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-amber-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            class="text-sm py-2.5 px-4 pl-10 p-2.5 rounded w-80 border-2 border-amber-900 focus:outline-none"
            placeholder="Enter your password"
            required
            autocomplete="off"
            v-model="password"
          />
        </div>
        <!--- Confirm Password ----->
        <label
          for="confirmPassword"
          class="block mb-2 text-sm font-medium text-white"
          >Confirm Password</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-amber-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          </div>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="text-sm py-2.5 px-4 pl-10 p-2.5 rounded w-80 border-2 border-amber-900 focus:outline-none"
            placeholder="Confirm your password"
            required
            autocomplete="off"
            v-model="confirmPassword"
          />
        </div>

        <!--- Button submit ----->
        <article class="mt-4 mb-4">
          <button
            class="bg-amber-600 hover:bg-amber-900 text-white py-2 px-4 rounded"
          >
            Create account
          </button>
        </article>
        <article>
          <CustomLink to="internal">
            Already have an account? Log in
          </CustomLink>
        </article>
      </form>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";
//import { useUserStore } from '../store/user';
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import CustomLink from "../utilities/CustomLink.vue";

// Create data / vars

const router = useRouter();
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorsMSG = ref(null);
const isDisabled = ref(false);

//Register function
const signUp = async () => {
  if (password.value === confirmPassword.value) {
    try {
      const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      setTimeout(() => {
        router.push({ name: "login" });
      }, 5000);
    } catch (error) {
      errorsMSG.value = error.message;
      setTimeout(() => {
        errorsMSG.value = null;
      }, 5000);
    }
    return;
  }
  errorsMSG.value = "Error: Passwords do not match";
  setTimeout(() => {
    errorsMSG.value = null;
  }, 5000);
  return { email, password, confirmPassword, errorsMSG, signUp };
};
</script>
<style></style>
