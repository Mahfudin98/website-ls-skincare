import axios from "axios";

const $axios = axios.create({
  baseURL: "https://api-report.lsskincare.id",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  },
  withCredentials: true
});

export default $axios;
