import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hangman from "../views/Hangman.vue";
import Game2048 from "../views/2048.vue";

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
  },
  {
    path: "/2048",
    name: "Game2048",
    component: Game2048
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
