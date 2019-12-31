import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./utils/http";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.jwtToken ? true : false;
  if (to.path == "/" || to.path == "/login" || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});
