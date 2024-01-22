import axios from "axios";

export const firstCustomFetch = axios.create({
  baseURL: "http://localhost:8090",
});
