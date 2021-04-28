import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import Tooltip from "primevue/tooltip";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Chart from "primevue/chart";
import Fieldset from "primevue/fieldset";
import Card from "primevue/card";
import ScrollTop from "primevue/scrolltop";

import "primevue/resources/themes/nova/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.directive("tooltip", Tooltip);

app.component("Menubar", Menubar);
app.component("Button", Button);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("Chart", Chart);
app.component("Fieldset", Fieldset);
app.component("Card", Card);
app.component("ScrollTop", ScrollTop);

app.mount("#app");
