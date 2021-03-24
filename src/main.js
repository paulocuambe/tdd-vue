import { createApp } from "vue";
import "./assets/reset.css";
import "./assets/main.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
