import axios from "axios";
import store from "../store/index";

//請求攔截 設置統一的header
axios.interceptors.request.use(
  config => {
    store.dispatch("setIsLoading", true);
    if (localStorage.jwtToken) {
      config.headers.Authorization = localStorage.jwtToken;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

//響應攔截
axios.interceptors.response.use(
  res => {
    store.dispatch("setIsLoading", false);
    return res;
  },
  err => {
    store.dispatch("setIsLoading", false);
    return Promise.reject(err);
  }
);

export default axios;
