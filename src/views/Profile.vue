<script setup>
import DashboardUser from "../components/profileAccount/DashboardUser.vue";
import Footer from "../components/Footer.vue";
import NewTask from "../components/TasksComponent/NewTask.vue";
import TaskItem from "../components/TasksComponent/TaskItem.vue";
</script>

<template>
  <section>
    <section class="flex flex-row">
      <DashboardUser />
      <section>
        <TaskItem class="w-full h-96 bg-red-100 border-2"/>
        <NewTask class="w-full bg-red-100 border-2" />
      </section>
    </section>
    <Footer class="fixed md:bottom-0 bg-white" />
  </section>
</template>

<script setup></script>

<style></style>
