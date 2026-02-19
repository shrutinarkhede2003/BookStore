import axios from "./axios";

export const loginUser = (loginData) => {
  return axios.post("/api/auth/login", loginData);
};
