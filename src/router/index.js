import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/pages";
import Category from "@/pages/category.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/",
      name: "Category",
      component: Category,
      props: route => ({ query: route.query.name })
    }
  ]
});
