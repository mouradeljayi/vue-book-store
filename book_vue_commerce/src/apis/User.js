import Api from './Api';
import Csrf from './Csrf';

export default {
  // register method
  async register(form) {
    await Csrf.getCookie();
    return Api.post("/register", form);
  },
  // login method
  async login(form) {
    await Csrf.getCookie();
    return Api.post("/login", form);
  },
  // logout method
  async logout() {
    await Csrf.getCookie();
    return Api.post("/logout");
  },
  // auth user method
  auth() {
    return Api.get("/user");
  }
};
