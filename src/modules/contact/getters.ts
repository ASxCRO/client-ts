import { AppState } from "@/models/AppState";

export const getters: any = {
  allContacts(state: AppState): Contact[] {
    return state.contacts;
  },
};
