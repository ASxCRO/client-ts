import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Logout from "../components/Logout.vue";
import Contact from "../components/ContactView.vue";
import Error from "../components/Error.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Contact },
  { path: "/logout", component: Logout },
  { path: "/error", component: Error },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
