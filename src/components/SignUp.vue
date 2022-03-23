<template>
  <section class="max-w-screen-sm  w-96 mx-auto mt-20 px-4 py-10 bg-red-900 flex flex-col items-center rounded-lg">
                  <!--- HANDLE ERRORS ---->
      <div v-if="errorsMSG">
          <p>{{ errorsMSG }}</p>
      </div>
                  <!--- SIGNUP FORM ---->
      <form @submit.prevent="signUp">
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
        <article class="flex flex-col mb-4">
            <label class="text-white" for="password">Confirm Password</label>
            <input class="py-2.5 px-2 rounded w-80 focus:outline-none"
                   required
                   id="confirmPassword"
                   type="password"
                   placeholder="Confirm your password"
                   autocomplete="off"
                   v-model="confirmPassword">
        </article>
        <article class="mb-4">
         <button type="submit" class="bg-red-500 hover:bg-red-400 text-white .font-bold py-2 px-4 rounded">
         Sign up
         </button>
         <svg class="animate-spin h-5 w-5 mr-3 fill-white" viewBox="0 0 24 24"></svg>
         </article>
         <article>
         <router-link class="text-red-200" :to="{name: 'login'}">Already have an account?<span class="text-lg text-white px-2 hover:text-green-500">Log in</span></router-link>
        </article>
      </form>
  </section>
</template>
<script >
import { ref } from 'vue';
//import { useUserStore } from '../store/user';
import { supabase } from "../supabase";


export default {
  
  setup() {
    // Create data / vars

    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorsMSG = ref(null);
    
    //const signUp = useUserStore()

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
          }, 5000)
        } catch (error) {
          errorsMSG.value = error.message;
          setTimeout(() => {
            errorsMsg.value = null;
          }, 5000);
        }
        return;
      }
      errorsMSG.value = "Error: Passwords do not match";
      setTimeout(() => {
        errorsMSG.value = null;
      }, 5000);
    };
    return { email, password, confirmPassword, errorsMSG, signUp };
  },
};
</script>
<style>

</style>