import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

const contactService = {
  addContact(contact: Contact) {
    return Vue.http
      .post(`${API_BASE_URL}/contact`, contact)
      .then((response: any) => response.body)
      .catch((error: any) => {
        console.error("Error adding contact:", error);
        throw error;
      });
  },

  getAllContacts(
    pageNumber: number,
    pageSize: number,
    sortField: string,
    term: string
  ) {
    const params = { pageNumber, pageSize, sortField, term };
    return Vue.http
      .get(`${API_BASE_URL}/contact`, { params })
      .then((response: any) => response.body)
      .catch((error: any) => {
        console.error("Error fetching contacts:", error);
        throw error;
      });
  },

  getContactById(id: number) {
    return Vue.http
      .get(`${API_BASE_URL}/contact/${id}`)
      .then((response: any) => response.body)
      .catch((error: any) => {
        console.error("Error fetching contact:", error);
        throw error;
      });
  },

  updateContact(id: number, contact: Contact) {
    return Vue.http
      .put(`${API_BASE_URL}/contact/${id}`, contact)
      .then((response: any) => response.body)
      .catch((error: any) => {
        console.error("Error updating contact:", error);
        throw error;
      });
  },

  deleteContact(id: number) {
    return Vue.http
      .delete(`${API_BASE_URL}/contact/${id}`)
      .then((response: any) => response.body)
      .catch((error: any) => {
        console.error("Error deleting contact:", error);
        throw error;
      });
  },
};

export default contactService;
