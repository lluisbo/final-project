import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router/index";
const pinia = createPinia();
import "./styles/index.css";
import "flowbite";

createApp(App).use(router).use(pinia).mount("#app");
