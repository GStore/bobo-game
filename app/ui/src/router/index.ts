import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import home from "./home";
import alphabetCards from "./cards";

const routes: RouteConfig[] = [alphabetCards];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
