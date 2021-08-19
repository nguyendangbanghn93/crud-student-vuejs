import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/students/detail/:studentId",
    component: () => import("../views/Detail"),
  },
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    path: "/students",
    name: "Students",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Students.vue"),
  },
  {
    path: "/students/create",
    component: () => import("../views/Create"),
  },
  {
    path: "/students/update/:studentId",
    component: () => import("../views/Update"),
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
