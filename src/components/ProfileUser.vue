<template>
  <div class="w-full h-full">
    <aside class="flex flex-row w-72 h-full justify-start bg-red-900">
      <div class=" w-72 h-full bg-red-900 flex flex-col m-10">
        <ul>
      <li>
        <img class="w-52 p-4" src="https://terrassadigital.cat/wp-content/uploads/2021/11/lluis-boria.jpg" alt="avatar" />
      </li> 
       <li>
         <form @submit.prevent="setUsername">
        <input />
         <button type="submit">
           Username
         </button>
         </form>
       </li>
      
       </ul>
     </div>
    </aside>
 </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
export default {
 
  setup() {
    // Create data / vars
    const data = ref();
    const dataLoaded = ref();
    // Get data
    const setUsername = async () => {
      try {
        const { data: profile, error } = await supabase.from('profiles').select('username').eq('')
   	.single();
        if (error) throw error;
        data.value = profile;
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
    };
    // Run data function
    setUsername();
    return { data, dataLoaded };
  },
}
</script>

<style>

</style>