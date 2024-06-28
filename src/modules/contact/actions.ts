export const actions = {
  getAllContacts({ commit }: any, payload: any) {
    commit("fetchContacts");
  },
  addContact({ commit }: any) {
    commit("addContact");
  },
};
