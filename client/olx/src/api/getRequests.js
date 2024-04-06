import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverUrl });

export const getAll = ({method}) => {
  return API.get(`/api/${method}`, { headers: { token } });
};


export const updateAll = (id, {method}) => {
  return API.get(`/api/${method}/:${id}`);
};
