import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverUrl });


export const addAll = ( Data, {method}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return API.post(`/api/${method}`,Data, { headers: { token } });
};
