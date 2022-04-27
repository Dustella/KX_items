import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/hd",
    component: () => import("./views/HandIn.vue"),
  },
  {
    path: "/",
    redirect: "/hd"
  },
  {
    path: "/ret",
    component: () => import("./views/Return.vue")
  },
  {
    path:"/OK",
    component: () => import("./views/OK.vue")
  }
];

export const router = createRouter({ history: createWebHistory(), routes: routes });

