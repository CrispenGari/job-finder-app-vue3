import { createWebHistory, createRouter } from "vue-router";

import { Home, Local, ForYou } from "./views";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/foryou",
    component: ForYou,
    name: "ForYou",
  },
  {
    path: "/local",
    name: "Local",
    component: Local,
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default router;
