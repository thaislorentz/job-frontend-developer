import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/pages";
import Category from "@/pages/category.vue";
import Product from "@/pages/product.vue";
import Cart from "@/pages/cart.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/category/:name",
      name: "Category",
      component: Category,
    },
    {
      path: "/product/:id",
      name: "Product",
      component: Product,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    }
  ]
});
