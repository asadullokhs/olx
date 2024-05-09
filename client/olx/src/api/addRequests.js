import axios from "axios";

// const serverUrl = process.env.REACT_APP_SERVER_URL;
const serverUrl = "https://server-ti8k.onrender.com";

const API = axios.create({ baseURL: serverUrl });


export const addAll = ( data, method) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return API.post(`/api/${method}`, data, { headers: { token } });
};