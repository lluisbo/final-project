<template></template>

<script>
import { ref } from "vue";
import { supabase } from "../../supabase";
export default {
  setup() {
    // Create data / vars
    const data = ref();
    const dataLoaded = ref();
    // Get data
    const setUsername = async () => {
      try {
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("*");
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
};
</script>

<style></style>
