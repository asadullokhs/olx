import axios from "axios";

const serverUrl = "https://server-ti8k.onrender.com";

const API = axios.create({ baseURL: serverUrl });

export const getAll = (method) => {
  return API.get(`/api/${method}`);
};

export const getOneProd = (id, method) => API.get(`/api/${method}/${id}`);