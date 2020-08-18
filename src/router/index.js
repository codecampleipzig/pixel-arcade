import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hangman from "../views/Hangman.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/hangman",
    name: "Hangman",
    component: Hangman
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
