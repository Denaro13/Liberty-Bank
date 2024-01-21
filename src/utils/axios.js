import axios from "axios";

export const firstCustomFetch = axios.create({
  baseURL: "http://localhost:8090",
});
// export const secondCustomFetch = axios.create({
//   baseURL: "http://localhost:9090",
// });
