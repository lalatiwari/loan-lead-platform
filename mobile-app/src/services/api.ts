import axios from "axios";

const API = axios.create({
  baseURL: "http://152.58.24.54/32:5000/api",
  timeout: 10000,
});

export default API;