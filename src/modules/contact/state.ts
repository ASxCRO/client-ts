import { AppState } from "@/models/AppState";

export const state: AppState = {
  contacts: [],
  isEdit: false,
  showForm: false,
  selectedContact: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
  },
  totalPages: 0,
  totalItemsNumber: 0,
  searchTerm: "",
  perPage: 10,
  currentPage: 1,
  sortField: "IdAsc",
};
