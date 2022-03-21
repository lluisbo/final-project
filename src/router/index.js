import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
const routes = [
  
  { path: "/auth", component: Auth, name: 'auth' },
  { path: "/home", component: Home },
 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;