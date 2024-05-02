import axios from "axios";

const serverUrl = "https://server-ti8k.onrender.com";

const API = axios.create({ baseURL: serverUrl });

export const getAll = (method) => {
  return API.get(`/api/${method}`);
};

<<<<<<< HEAD
=======
export const getOneProd = (id, method) => API.get(`/api/${method}/${id}`);
>>>>>>> ef1be114cb68ab5bfcf149758e9c62e3d1290df4
