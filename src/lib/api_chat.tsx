import axios from "axios";

const local = "http://127.0.0.1:8000";
const production = "https://api-website.lsskincare.id";
const $axiosChat = axios.create({
  baseURL: production,
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  },
  withCredentials: true
});

export default $axiosChat;
