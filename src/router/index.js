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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/charactersheet",
    name: "Charactersheet",
    component: () => import("../views/Charactersheet.vue"),
  },
  {
    path: "/gamemaster",
    name: "Gamemaster",
    component: () => import("../views/Gamemaster.vue"),
  },
  {
    path: "/tv",
    name: "Tv",
    component: () => import("../views/Tv.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/admin/items",
    name: "Items",
    component: () => import("../views/Items.vue"),
  },
  {
    path: "/admin/characters",
    name: "Characters",
    component: () => import("../views/Characters.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
