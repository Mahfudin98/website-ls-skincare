import axios from "axios";

const $axiosChat = axios.create({
  baseURL: "https://api-website.lsskincare.id",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  },
  withCredentials: true
});

export default $axiosChat;
