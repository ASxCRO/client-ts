import { AppState } from "@/models/AppState";
import contactService from "@/services/contactService";

export const mutations: any = {
  fetchContacts(state: AppState) {
    return contactService
      .getAllContacts(
        state.currentPage,
        state.perPage,
        state.sortField,
        state.searchTerm
      )
      .then((data: any) => {
        state.contacts = data.contacts;
        state.totalPages = data.totalPages;
        state.totalItemsNumber = data.totalItemsNumber;
      })
      .catch((error: any) => {
        console.log(error);
      });
  },
  editContact(state: AppState, contact: Contact) {
    state.showForm = true;
    state.isEdit = true;
    state.selectedContact = { ...contact };
  },
  resetContact(state: AppState) {
    state.selectedContact = {
      firstName: "",
      lastName: "",
      email: "",
      id: 0,
    };
  },
  addContact(state: AppState) {
    state.selectedContact = { id: 0, firstName: "", lastName: "", email: "" };
    state.isEdit = false;
    state.showForm = true;
  },
};
