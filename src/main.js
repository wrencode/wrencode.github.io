import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import TabMenu from "primevue/tabmenu";

import "primevue/resources/themes/md-dark-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component("TabMenu", TabMenu);

app.mount("#app");
