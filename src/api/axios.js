import axios from "axios";
const BASE_URL = "https://auth-template-qr4k.onrender.com";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
