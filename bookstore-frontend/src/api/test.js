import axios from "./axios";

export const testBackend = () => {
  return axios.get("/swagger-ui/index.html");
};
