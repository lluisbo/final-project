<template>
  
  <section class="flex flex-row w-3/4 bg-blue-900 rounded-lg justify-start shadow-lg shadow-black/40 border-2  m-5">
   <form class="flex flex-col m-4" @submit.prevent novalidate>
     <article class="mb-4">
      <h1 class="text-white mt-4 font-bold px-3 text-3xl" >CREATE YOUR ACCOUNT</h1>
        </article>

     <article class=" block mb-4">
      <LabelField>Name</LabelField>
      <NameField v-model="user.name"/>
        </article>

     <article class="mb-4">
      <LabelField For="email">Email</LabelField>
      <EmailField v-model="user.email"/>
        </article>

     <article class="mb-4">
      <LabelField For="password">Password</LabelField>
      <PasswordField  v-model="user.password"/> 
        </article>

     <article class="mb-6">
      <ButtonComponent  type="submit" :onClick="HandleSubmit">Sign up</ButtonComponent>
        </article>
   </form>
  </section>
 
</template>

<script setup>

import { ref, reactive } from 'vue';
import EmailField from "./formComponents/EmailField.vue";
import PasswordField from "./formComponents/PasswordField.vue";
import LabelField from "./formComponents/LabelField.vue";
import ButtonComponent from "./formComponents/ButtonComponent.vue";
import NameField from "./formComponents/NameField.vue";

components: {EmailField, PasswordField, LabelField, ButtonComponent, NameField}

let user = reactive({
  name: '',
  email: '',
  password: '',
})

const HandleSubmit = () => {
  console.log(user);
}

</script>

<style>

</style>