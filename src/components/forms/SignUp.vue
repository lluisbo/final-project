<template>
  <section
    
    class="relative pt-16 pb-0 md:py-3 w-2/3 mx-auto mt-10 px-4 bg-green-700 rounded-lg flex flex-row gap-5 justify-between shadow-md bg-blend-overlay"
  >
    <section class="px-10">
      <!--- SIGN UP FORM ---->
      <form @submit.prevent="signUp" novalidate>
        <h1 class="mb-4 text-xl text-white font-bold">CREATE YOUR ACCOUNT</h1>
        <!--- Email ----->
        <label
          for="email-adress-icon"
          class="block mb-2 text-sm font-medium text-white"
          >Your Email</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-3.5 left-0 pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-amber-900"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="email"
            class="text-sm py-2.5 px-4 pl-10 p-2.5 rounded w-80 border-2 border-amber-500 focus:outline-none"
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
              />
            </svg>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            class="text-sm py-2.5 px-4 pl-10 p-2.5 rounded w-80 border-2 border-amber-500 focus:outline-none"
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
              />
            </svg>
          </div>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="text-sm py-2.5 px-4 pl-10 p-2.5 rounded w-80 border-2 border-amber-500 focus:outline-none"
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
        <article class="text-white">
          <CustomLink to="login">Already have an account? Log in</CustomLink>
        </article>
      </form>
    </section>
    <section class="h-full px-4 flex">
      <!--- HANDLE ERRORS ---->
      <section
        v-if="errorsMSG"
        class="px-4 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
        role="alert"
      >
        <span class="flex place-content-center font-medium">Error Alert!</span>

        <p>{{ errorsMSG }}</p>
      </section>
      <!--- Throw a success message when a user is created ---->
      <section
        v-if="isSubmit"
        class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        <span class="font-medium">Success alert!</span>
        <br />
        {{ isSubmit }}
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../../store/user";
import { useRouter } from "vue-router";
import CustomLink from "../../utilities/CustomLink.vue";

// Create data / vars
const router = useRouter();
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
//Alerts Error & Success Registration
const errorsMSG = ref(null);
const isSubmit = ref(null);

//Register function
async function signUp() {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      isSubmit.value =
        "Your account has been created, please check out your inbox and confirm your account through the link.";
      setTimeout(() => {
        router.push({ path: "/login" });
      }, 2000);
    } catch (error) {
      errorsMSG.value = error.message;
      setTimeout(() => {
        errorsMSG.value = null;
      }, 5000);
    }
  }
}
</script>
<style>
 body { background-image: url('../../assets/signUpIMG.jpeg');
        background-attachment: fixed;
        background-position: left center;
        background-size: cover;
 }
</style>
