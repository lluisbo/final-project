<template>
  <section
    class="max-w-screen-sm w-full mx-auto mt-20 px-4 py-10 bg-amber-700 flex flex-row justify-items-stretch rounded-lg shadow-md bg-blend-overlay"
  >
    <section class="w-screen h-full px-4">
      <img
        class="w-screen contrast-100 mb-4"
        src="../assets/flat-lay-notebook-with-list-desk.jpeg"
      />
      <!--- HANDLE ERRORS ---->
      <div
        v-if="errorsMSG"
        class="w-full h-auto text-white text-sm font-medium"
      >
        <p>{{ errorsMSG }}</p>
      </div>
    </section>

    <section>
      <!--- SIGN IN FORM ---->
      <form @submit.prevent="signIn" novalidate>
        <h1 class="mb-4 text-3xl text-white font-bold">LOG IN</h1>
        <!--- Email ----->
        <label
          for="email-adress-icon"
          class="block mb-2 text-sm font-medium text-white"
          >Your Email</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
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
          >Your Password</label
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
            class="text-sm py-2.5 px-4 pl-10 p-2.5 rounded w-80 border-2 border-amber-900 focus:outline-none"
            placeholder="Enter your password"
            required
            autocomplete="off"
            v-model="password"
          />
        </div>

        <!--- Button submit ----->
        <article class="mt-4 mb-4">
          <button
            class="bg-amber-600 hover:bg-amber-900 text-white py-2 px-4 rounded"
          >
            Log in
          </button>
        </article>

        <article class="flex flex-row">
          <CustomLink to="login">
            Not registered? Create an account!
          </CustomLink>
        </article>
      </form>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import CustomLink from "../utilities/CustomLink.vue";

// Create data / vars

const router = useRouter();
const email = ref(null);
const password = ref(null);
const errorsMSG = ref(null);
// Login function
const signIn = async () => {
  try {
    const { error } = await supabase.auth.signIn({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push({ name: "profile" });
  } catch (error) {
    errorsMSG.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorsMSG.value = null;
    }, 5000);
  }
  return { email, password, errorsMSG, signIn };
};
</script>
<style></style>
