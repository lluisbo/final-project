<template>
   <form @submit.prevent novalidate>
     <article>
       <h3>CREATE YOUR ACCOUNT</h3>
     </article>
     <article>
       <LabelField>Name</LabelField>
       <NameField v-model="user.name"/>
     </article>
      <article>
        <LabelField For="email">Email</LabelField>
        <EmailField v-model="user.email"/>
        </article>
      <article>
        <LabelField For="password">Password</LabelField>
        <PasswordField  v-model="user.password"/> 
        </article>
        <article>
         <ButtonComponent Type="submit">REGISTER</ButtonComponent>
        </article>


   </form>
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