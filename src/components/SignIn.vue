<template>
  <section class="max-w-screen-sm mx-auto mt-20 px-4 py-10 bg-red-900 flex flex-col items-center rounded-lg shadow-md bg-blend-overlay">
                  <!--- HANDLE ERRORS ---->
      <div v-if="errorsMSG">
          <p>{{ errorsMSG }}</p>
      </div>
                  <!--- SIGN IN FORM ---->
      <form @submit.prevent="signIn" novalidate>
          <h1 class="mb-4 text-3xl text-white font-bold" >SIGN UP</h1>
        <article class="flex flex-col mb-4">
            <label class="text-white" for="email">Email</label>
            <input  class="text-sm py-2.5 px-2 rounded w-80 focus:outline-none"
                    required
                    id="email"
                    type="text"
                    placeholder="Enter your email address"
                    autocomplete="off"
                    v-model="email"/>
        </article>

        <article class="flex flex-col mb-4">
            <label class="text-white" for="password">Password</label>
            <input class="py-2.5 px-2 rounded w-80 focus:outline-none"
                   required
                   id="password"
                   type="password"
                   placeholder="Enter your password"
                   autocomplete="off"
                   v-model="password">
        </article>

        <article class="mb-4">
         <button  class="bg-red-500 hover:bg-red-400 text-white .font-bold py-2 px-4 rounded">
         Log in
         </button>
         </article>

         <article>
         <router-link class="text-red-200" :to="{name: 'auth'}">Create your account:<span class="text-lg text-white px-2 hover:text-green-500"> Sign up</span></router-link>
        </article>

      </form>
  </section>
</template>
<script>
import { ref } from "vue";
import { supabase } from '../supabase';
import { useRouter } from "vue-router";
export default {
  
  setup() {
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
        router.push({ name: "home" });
      } catch (error) {
        errorsMSG.value = `Error: ${error.message}`;
        setTimeout(() => {
          errorsMSG.value = null;
        }, 5000);
      }
    };
    return { email, password, errorsMSG, signIn };
  },
};
</script>
<style>

</style>