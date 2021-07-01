import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"
import "./plugins/vuetify-money.js";
import axios from "axios"
import VueAxios from "vue-axios"
import store from "./store/store"


Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store: store,
  render: (h) => h(App),
}).$mount("#app");

