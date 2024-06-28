import Vue from "vue";
import VueResource from "vue-resource";
import router from "@/router";

Vue.use(VueResource);

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

Vue.http.interceptors.push((request: any, next: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.set("Authorization", `Bearer ${token}`);
  }

  next((response: any) => {
    if (response.status === 401) {
      router.push("/logout");
    } else if (response.status === 500) {
      router.push("/error");
    }
  });
});

const authService = {
  login(user: User) {
    return Vue.http
      .post(`${API_BASE_URL}/auth/login`, user)
      .then((response: any) => response.body)
      .catch((error: any) => {
        console.error("Error logging in:", error);
        throw error;
      });
  },

  register(user: User) {
    return Vue.http
      .post(`${API_BASE_URL}/auth/register`, user)
      .then((response: any) => response.body)
      .catch((error: any) => {
        console.error("Error registering:", error);
        throw error;
      });
  },

  logout() {
    localStorage.removeItem("token");
  },
};

export default authService;
