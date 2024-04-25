import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverUrl });

export const getAll = ({ method }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return API.get(`/api/${method}`, { headers: { token } });
};

export const getOneProd = (id, method) => `/api/${method}/:${id}`;
