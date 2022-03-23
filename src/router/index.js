import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Profile.vue";
import LogIn from "../views/LogIn.vue"
const routes = [
  { path: "/home", component: Home, name: 'home' },
  { path: "/auth", component: Auth, name: 'auth' },
  { path: "/profile", component: Home,  name: 'profile'},
  { path: "/login", component: LogIn, name: 'login'}
  
 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;