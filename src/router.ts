import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/hd",
    component: () => import("./views/HandIn.vue"),
  },
];

export const router = createRouter({ history: createWebHistory(), routes: routes });

