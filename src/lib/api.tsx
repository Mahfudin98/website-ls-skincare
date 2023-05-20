import axios from "axios";

const $axios = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  },
  withCredentials: true
});

export default $axios;
