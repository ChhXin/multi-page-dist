import Vue from "vue";
import Router from "vue-router";
import Home from "./page/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/projectB",
      name: "home",
      component: Home
    }
  ]
});
