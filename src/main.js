import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { DateFormat } from "@royalscome/format";
import { Plugin } from "vue-fragment";

const app = createApp(App);
app.config.globalProperties.DateFormat = DateFormat;
app.use(store).use(router).use(Plugin).mount("#app");
