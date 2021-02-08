import { createWebHistory, createRouter } from "vue-router";

import Login from "./pages/Login.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import Dashboard from "./pages/Dashboard.vue";
import InternLayout from "./pages/InternLayout.vue";

const authRoutes = [
  {
    path: "dashboard",
    name: "Dashboard",
    component: Dashboard
  }
];

const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/:catchAll(.*)", name: "PageNotFound", component: PageNotFound },
  {
    path: "/auth",
    name: "Layout",
    component: InternLayout,
    children: authRoutes,
    redirect: "/auth/dashboard"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
