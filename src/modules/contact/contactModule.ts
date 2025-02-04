import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

export const contactsModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
