import { RouteConfig } from "vue-router";
import Home from "@/views/home.vue";

const home: RouteConfig = {
  path: "/",
  name: "home",
  component: Home
};

export default home;
