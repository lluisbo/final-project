<template>
  <!--- TASK CARD --->
  <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
    <div class="group h-full mt-6">
      <div
        class="group relative w-full h-full px-8 pt-16 pb-8 bg-green-700 rounded-md border-2 border-white shadow-md hover:shadow-xl transition duration-200"
      >
        <div
          class="absolute top-9 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex h-16 w-full items-center justify-center transition duration-200"
        >
          <div class="flex flex-col justify-around w-80 h-12 font-bold">
            <p
              class="text-white font-bold group-hover:text-coolGray-600 uppercase text-xl transition duration-200"
            >
              {{ item.type }}
            </p>
          </div>
        </div>
        <h3 class="mb-4 mt-5 text-xl leading-7 text-white font-bold max-w-xs">
          {{ item.title }}
        </h3>
        <p class="mb-20 text-white">{{ item.description }}</p>

        <!-- EDIT TITTLE-->
        <div class="flex mt-4" v-if="editDialog">
          <input
            class="font-body appearance-none block w-5/6 p-3 leading-5 text-gray-900 border border-amber-500 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
            placeholder="Edit Task"
            v-model="editTask"
            type="text"
          />
          <button
            class="w-1/4 ml-2 inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-amber-700 hover:bg-green-700 font-medium focus:ring-2 focus:ring-green-800 focus:ring-opacity-50 rounded-md"
            type="submit"
            @click.prevent="handleEdit()"
          >
            Add
          </button>
        </div>
        <div class="flex flex-row gap-1 justify-around pt-4">
          <button
            v-if="!is_complete"
            class="text-white p-2 w-15"
            @click="toggleTodo()"
          >
            completed
          </button>
          <button
            v-if="is_complete"
            class="text-green-700 p-2 w-15 rounded bg-indigo-400 hover:bg-indigo-500"
            @click="toggleTodo()"
          ></button>
          <button class="text-white p-2 w-15" @click="toggleEdit()">
            edit
          </button>

          <button class="text-white p-2 w-15" @click="remove()">delete</button>
        </div>
        <!--- HANDLE ERRORS ---->
        <section
          v-if="isError"
          class="px-4 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
        >
          <span class="flex place-content-center font-medium"
            >Error Alert!</span
          >

          <p>{{ errorsMSG }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const editTask = ref("");
const editDialog = ref(false);
const currentIndex = ref("");
const taskCompleted = true;

//Alert Errors
const isError = ref(false);
const errorsMSG = ref("");
const emit = defineEmits([
  "childToggle",
  "childRemove",
  "childEdit",
  "childToggleEdit",
]);
const props = defineProps(["item"]);

function handleError() {
  errorsMSG.value = "Field cannot be empty";
  isError.value = true;
}

function toggleEdit() {
  editDialog.value = !editDialog.value;
  editTask.value = props.item.title;
}

function toggleTodo() {
  emit("childToggle", props.item);
}

function handleEdit() {
  if (editTask.value === "") handleError();
  else {
    isError.value = false;
    editDialog.value = false;
    const editValues = {
      oldValue: props.item,
      newValue: editTask.value,
    };
    emit("childEdit", editValues);
    pendings[index] = editTask.value;
    editTask.value = "";
  }
}

function remove() {
  emit("childRemove", props.item);
}
</script>

<style>
.taskDone {
  text-decoration-line: line-through;
}
</style>
