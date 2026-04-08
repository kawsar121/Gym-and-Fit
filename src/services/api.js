import axios from "axios";

const API = axios.create({
  baseURL: "https://apitest.thewarriors.team/api",
});

export default API;