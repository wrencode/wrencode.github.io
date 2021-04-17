import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Services from "@/views/Services.vue";
import Clients from "@/views/Clients.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
