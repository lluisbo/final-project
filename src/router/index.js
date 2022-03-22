import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue"
const routes = [
  
  { path: "/auth", component: Auth, name: 'auth' },
  { path: "/home", component: Home,  name: 'home'},
  { path: "/login", component: LogIn, name: 'login'}
  
 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;