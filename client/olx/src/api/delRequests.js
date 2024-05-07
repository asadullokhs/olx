import axios from "axios";

const serverUrl = "https://server-ti8k.onrender.com";

const API = axios.create({ baseURL: serverUrl });

export const deleteAll = (id,method) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return API.delete(`/api/${method}/${id}`, { headers: { token } });
};
export const deleteUser = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return API.delete(`/api/user/${id}`, { headers: { token } });
};
