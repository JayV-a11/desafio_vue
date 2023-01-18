import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./routes/router";
import "./main.css";

createApp(App).use(store).use(router).mount("#app");
