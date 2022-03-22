import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import router from "./router/index";
const pinia = createPinia();
import './styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'

createApp(App).use(router).use(pinia).mount("#app");
