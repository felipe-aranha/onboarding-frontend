import { createWebHistory, createRouter } from "vue-router";

import Login from "./pages/Login.vue";
import PageNotFound from "./pages/PageNotFound.vue";

const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/:catchAll(.*)", name: "PageNotFound", component: PageNotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
