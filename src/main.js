import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import {
  faSearch,
  faShoppingCart,
  faBars,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import router from "./router";
import store from './store'


Vue.use(VueToast, {position: 'top'});


library.add(faSearch, faShoppingCart, faBars, faInstagram, faFacebook, faLinkedin, faChevronDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
