import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Profile from "../views/Profile.vue";
import LogIn from "../views/LogIn.vue";
import Home from "../views/Home.vue";
const routes = [
  { path: "/home", component: Home, name: "home" },
  { path: "/auth", component: Auth, name: "auth" },
  { path: "/login", component: LogIn, name: "login" },
  { path: "/profile", component: Profile, name: "profile" },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
