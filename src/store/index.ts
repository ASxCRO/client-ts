import Vue from "vue";
import Vuex from "vuex";
import { contactsModule } from "../modules/contact/contactModule";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    contact: contactsModule,
  },
});
