import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverUrl });



export const updateAll = (id, Data, {method}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return API.put(`/api/${method}/:${id}`,Data, { headers: { token } });
};
