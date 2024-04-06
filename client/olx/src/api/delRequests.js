import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverUrl });

export const deleteAll = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return API.delete(`/api/:${id}`, { headers: { token } });
};
export const deleteUser = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return API.delete(`/api/USER/:${id}`, { headers: { token } });
};
