<template>
  <section
    class="relative pt-16 pb-0 md:py-3 w-5/6 mx-auto mt-10 px-4 bg-amber-700 flex flex-row justify-items-stretch shadow-md bg-blend-overlay"
  >
    <section class="w-5/6 h-full px-4">
      <!--- HANDLE ERRORS ---->
      <div
        v-if="errorsMSG"
        class="w-full h-auto text-white text-sm font-medium"
      >
        <p>{{ errorsMSG }}</p>
      </div>
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
            @onclick="isDisabled = !isDisabled"
            class="bg-amber-600 hover:bg-amber-900 text-white py-2 px-4 rounded"
          >
            Create account

            <svg
              v-bind:style="isDisabled ? { display: 'hidden' } : 'hidden'"
              role="status"
              class="inline mr-3 w-4 h-4 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
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
      console.log(password.value);
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
