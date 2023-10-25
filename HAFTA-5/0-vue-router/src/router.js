import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    name: "AboutPage",
    path: "/hakkimda",
    component: () => import("@/views/About.vue"),
  },
  {
    name: "DetailPage",
    path: "/detay/:userID",
    component: () => import("@/views/Details.vue"),
  },
];

const router = createRouter({
  routes,
  // history: createWebHistory(),
  history: createWebHashHistory()
});

export default router;
