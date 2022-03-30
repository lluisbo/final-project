import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../store/user";
import Auth from "../views/Auth.vue";
import Profile from "../views/Profile.vue";
import LogIn from "../views/LogIn.vue";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    meta: {
      title: "home",
      auth: false,
    },
  },
  {
    path: "/auth",
    component: Auth,
    name: "auth",
    meta: {
      title: "auth",
      auth: false,
    },
  },
  {
    path: "/login",
    component: LogIn,
    name: "login",
    meta: {
      title: "login",
      auth: false,
    },
  },
  {
    path: "/profile",
    component: Profile,
    name: "profile",
    meta: {
      title: "profile",
      auth: true,
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route guard for auth routes
router.beforeEach(async (to, from, next) => {
  const local = localStorage.getItem('supabase.auth.token')
  // const user = await useUserStore().user;
  console.log(local)
  if (to.matched.some((res) => res.meta.auth)) {
    if (local) {
      next();
      return;
    }
    next({ name: "login" });
    return;
  }
  next();
});

export default router;
