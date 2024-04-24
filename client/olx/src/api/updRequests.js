import axios from "axios";

const serverUrl = "https://server-ti8k.onrender.com";

const API = axios.create({ baseURL: serverUrl });



export const updateAll = (id, Data, method) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return API.put(`/api/${method}/${id}`,Data, { headers: { token } });
};
