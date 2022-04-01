<template>
  <section class="flex flex-col w-full">
    <section class="flex flex-row justify-between">
      <DashboardUser />
      <NewTask @childAddTodo="addTodo" />
    </section>
  
    <section class="flex flex-row w-full h-40 justify-around  bg-green-700">
      <!-- Filter By -->
      <div>
        <button
          id="filterByDropdownButton"
          data-dropdown-toggle="filterByDropdown"
          class="text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Sort By
          <svg
            class="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="filterByDropdown"
          class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div>Sort By</div>
          </div>
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                class="block py-2 px-4 hover:bg-gray-100 hover:text-green-500 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
              >
                <button @click="showDone" class="">Done</button></a
              >
            </li>
            <li>
              <a
                class="block py-2 px-4 hover:bg-gray-100 hover:text-yellow-300 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
              >
                <button @click="showUndone" class="">Undone</button></a
              >
            </li>
            <li>
              <a
                class="block py-2 px-4 hover:bg-gray-100 hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                ><button @click="resetFilters" class="">Reset</button></a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Sort By -->
      <div>
        <button
          id="sortByDropdownButton"
          data-dropdown-toggle="sortByDropdown"
          class="text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Select By
          <svg
            class="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="sortByDropdown"
          class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div>Select By</div>
          </div>
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                ><button @click="sortTitle" class="">Title</button></a
              >
            </li>
            <li>
              <a
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                ><button @click="sortDate" class="">Date</button></a
              >
            </li>
            <li>
              <a
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer hover:text-red-500"
                ><button @click="resetFilters" class="">Reset</button></a
              >
            </li>
          </ul>
        </div>
      </div>

      <!--- Mark & Delete Task  --->
      <div>
        <button
          id="dropdownRightButton"
          data-dropdown-toggle="dropdownRight"
          data-dropdown-placement="right"
          type="button"
          class="text-white py-2 px-4 rounded"
        >
          Mark All
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
        <div
          id="dropdownRight"
          class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div>Mark All</div>
          </div>
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer hover:text-green-500"
                ><button @click="markAllDone" class="">Done</button></a
              >
            </li>
            <li>
              <a
                class="hover:text-yellow-200 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                ><button @click="markAllUndone" class="">Undone</button></a
              >
            </li>
            <li>
              <a
                data-modal-toggle="defaultModal"
                class="hover:text-red-500 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >Remove</a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Remove all tasks dialog -->
    <div
      v-if="removeAllDialog"
      class="flex w-3/4 mx-auto rounded-md bg-gray-100 shadow-lg p-5 gap-5"
    >
      <input class="bg-gray-100 bg-icon bg-danger w-10" type="text" />
      <p class="font-mono text-red-600 italic font-bold w-2/3">
        You're about to remove all tasks, are you sure?
      </p>
      <button
        class="bg-btn bg-done btn-template bg-green-400 w-16 hover:bg-green-500"
        @click.prevent="removeAll"
      ></button>
      <button
        class="bg-btn bg-undone btn-template bg-red-500 w-16 hover:bg-red-600"
        @click.prevent="confirmRemoveAll"
      ></button>
    </div>
    <section class="flex flex-row justify-center bg-gray-50">
      <h1 class="text-2xl text-center mb-5">Task LIST</h1>
      <TaskItem
        class="w-full mt-10"
        @childToggle="toggleTodo"
        @childRemove="remove"
        @childEdit="edit"
        v-for="(task, index) in tasks"
        :item="task"
      />
       </section>
        <div
      class="flex flex-row justify-center items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
    >
      <button
        @click.prevent="removeAll"
        type="button"
        class="bg-amber-600 hover:bg-amber-900 text-white py-2 px-4 rounded"
      >
        Delete All
      </button>
      <button
        data-modal-toggle="defaultModal"
        type="button"
        class="bg-amber-600 hover:bg-amber-900 text-white py-2 px-4 rounded"
      >
        Cancel
      </button>
    </div>
   
    <Footer class="fixed md:bottom-0" />
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";
import TaskItem from "../components/TasksComponent/TaskItem.vue";
import NewTask from "../components/TasksComponent/NewTask.vue";
import DashboardUser from "../components/profileAccount/DashboardUser.vue";
// import Footer from "../components/Footer.vue";

const tasks = ref([]);
const removeAllDialog = ref(false);

async function getTasks() {
  tasks.value = await useTaskStore().fetchTasks();
}
getTasks();

async function addTodo(newTodo, newDescription) {
  await useTaskStore().addTask(newTodo, newDescription);
  getTasks();
}
// Toggle
async function toggleTodo(item) {
  const toggleComplete = !item.is_complete;
  const toggleId = item.id;
  await useTaskStore().toggleDone(toggleComplete, toggleId);
  getTasks();
}
// Dropdown variables
const dropdownSelect = ref(false);
const dropdownFilter = ref(false);
const dropdownSort = ref(false);
// Global Functions
async function showDone() {
  resetFilters();
  const filterDone = await useTaskStore().filterDone();
  tasks.value = filterDone;
  resetDropdowns();
}
async function showUndone() {
  resetFilters();
  const filterUndone = await useTaskStore().filterUndone();
  tasks.value = filterUndone;
  resetDropdowns();
}
async function resetFilters() {
  getTasks();
}
async function markAllDone() {
  await useTaskStore().allDone();
  getTasks();
}
async function markAllUndone() {
  await useTaskStore().allUndone();
  getTasks();
}
function confirmRemoveAll() {
  removeAllDialog.value = !removeAllDialog.value;
  resetDropdowns();
}
async function removeAll() {
  await getTasks();
  tasks.value.forEach(async (task) => {
    await remove(task);
  });
}
// Sorting Functions
async function sortTitle() {
  getTasks();
  const sortTitle = await useTaskStore().sortTitle();
  tasks.value = sortTitle;
  resetDropdowns();
}
async function sortDate() {
  getTasks();
  const sortDate = await useTaskStore().sortDate();
  tasks.value = sortDate;
  resetDropdowns();
}
//Toggle Dropdowns
function toggleDropdownSelect() {
  dropdownSelect.value = !dropdownSelect.value;
}
function toggleDropdownFilter() {
  dropdownFilter.value = !dropdownFilter.value;
}
function toggleDropdownSort() {
  dropdownSort.value = !dropdownSort.value;
}
function resetDropdowns() {
  dropdownSelect.value = false;
  dropdownFilter.value = false;
  dropdownSort.value = false;
}

//Edit Items
async function edit(item) {
  const newTitle = item.newValue;
  const editId = item.oldValue.id;
  await useTaskStore().editTask(newTitle, editId);
  getTasks();
}
// Remove Items
async function remove(item) {
  await useTaskStore().deleteTask(item.id);
  getTasks();
}
</script>

<style></style>
