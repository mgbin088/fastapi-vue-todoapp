import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "./assets/scss/app.scss";
import store from "@/store";
import router from "./router";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  router,
}).$mount("#app");
