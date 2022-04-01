<template>
  <!-- Component Task -->
  <div class="mb-6">
    <div class="flex flex-col bg-gray-50 px-4 p-5">
      <h1 class="text-2xl text-amber-600 font-bold">NEW TASKS</h1>
      <h3 class="text-sm text-black uppercase pt-2 pb-4">
        Organized and manage your day-to-day.
      </h3>
      <!--- Tittle Task ----->
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-green-900"
        >Tittle</label
      >
      <input
        class="text-sm py-2.5 px-4 pl-10 p-2.5 mb-4 rounded w-80 border-2 border-amber-500 focus:outline-none"
        v-model="tittleTask"
        type="text"
        name="tittleTask"
        id="name"
      />
      <!--- Description Task ----->
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-green-900"
        >Choose Tag</label
      >
      <select
        id="description"
        class="text-sm py-2.5 px-4 pl-10 p-2.5 mb-5 rounded w-80 border-2 border-amber-500 focus:outline-none"
        required
        v-model="typeDescription"
        placeholder="Select "
      >
        <option value="select-type">choose a tag</option>
        <option value="work">Work</option>
        <option value="home">home</option>
        <option value="weekends">Weekends</option>
        <option value="shopping">Shopping</option>
      </select>

      <label for="message" class="block mb-2 text-sm font-medium text-green-900"
        >Description</label
      >
      <textarea
        id="message"
        class="text-sm py-2.5 px-4 pl-10 p-2.5 mb-5 rounded w-80 border-2 border-amber-500 focus:outline-none"
        rows="4"
        required
        v-model="textDescription"
        placeholder=""
      ></textarea>

      <button
        class="bg-amber-600 w-64 mb-8 hover:bg-amber-900 text-white py-2 px-4 rounded"
        type="submit"
        @click.prevent="newTask"
      >
        New Task
      </button>

      <!--- HANDLE ERRORS ---->
      <section
        v-if="notCreated"
        class="p-4 mb-4 w-64 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
        role="alert"
      >
        <span class="flex place-content-center font-medium">Error Alert!</span>

        <p>{{ errorsMSG }}</p>
      </section>
      <!--- Throw a success message when a task is created ---->
      <section
        v-if="isCreated"
        class="p-4 mb-4 text-sm text-center text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        <span class="font-medium">Success alert!</span>
        <br />
        {{ isCreated }}
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useTaskStore } from "../../store/task";
const emit = defineEmits(["childAddTodo"]);

// Input values
const tittleTask = ref(null);
const typeDescription = ref("select-type");
const textDescription = ref(null);
// Alert success
const isCreated = ref(null);
// Alert Errors
const notCreated = ref(false);
const errorsMSG = ref("");

function newTask() {
  if (tittleTask.value === null) {
    notCreated.value = true;
    errorsMSG.value = "Tittle and description are required";
    setTimeout(() => {
      notCreated.value = false;
    }, 2000);
  } else {
    notCreated.value = false;
    isCreated.value = "A new task has been created";
    setTimeout(() => {
      isCreated.value = false;
    }, 2000);
    emit(
      "childAddTodo",
      tittleTask.value,
      typeDescription.value,
      textDescription.value
    );
    tittleTask.value = "";
    typeDescription.value = "";
    textDescription.value = "";
  }
}
</script>

<style></style>
