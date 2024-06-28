import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import messages from "./locales/index";
import VueI18n from "vue-i18n";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(BootstrapVue);

const i18n = new VueI18n({
  locale: "en",
  messages,
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
