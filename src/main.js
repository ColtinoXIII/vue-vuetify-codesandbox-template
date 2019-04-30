import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import Home from "./components/Home";
import About from "./components/About";
import Schedule from "./components/Schedule";

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [
      { path: "/", component: Home },
      { path: "/about", component: About },
      { path: "/schedule", component: Schedule }
    ]
  })
}).$mount("#app");
