export interface AppState {
  contacts: Contact[];
  isEdit: boolean;
  showForm: boolean;
  selectedContact: Contact;
  totalPages: number;
  totalItemsNumber: number;
  searchTerm: string;
  perPage: number;
  currentPage: number;
  sortField: string;
}
