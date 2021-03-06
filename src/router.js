import { createWebHistory, createRouter } from "vue-router";

import Login from "@/pages/Login.vue";
import PageNotFound from "@/pages/PageNotFound.vue";
import Dashboard from "@/pages/Dashboard.vue";
import InternLayout from "@/pages/InternLayout.vue";
import RegisterCompany from "@/pages/RegisterCompany/Index.vue";
import RegisterUser from "@/pages/RegisterUser/Index.vue";
import RecoverAccount from "@/pages/RecoverAccount.vue";

const authRoutes = [
  {
    path: "dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "documents",
    name: "Documents",
    component: Dashboard
  },
  {
    path: "register",
    name: "Register",
    redirect: "/auth/register/company"
  },
  {
    path: "register/company",
    name: "Register Company",
    component: RegisterCompany
  },
  {
    path: "register/user",
    name: "Register User",
    component: RegisterUser
  }
];

const routes = [
  { path: "/", name: "Home", redirect: "/login" },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/recover/account",
    name: "Recover Account",
    component: RecoverAccount
  },
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
