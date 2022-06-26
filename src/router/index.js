import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/pages";
import Category from "@/pages/_category.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/:category",
      name: "Category",
      component: Category
    }
  ]
});
