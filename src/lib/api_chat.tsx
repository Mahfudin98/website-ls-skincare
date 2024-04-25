import axios from "axios";

const $axiosChat = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  },
  withCredentials: true
});

export default $axiosChat;
