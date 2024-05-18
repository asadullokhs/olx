import axios from "axios";

const serverUrl = "https://server-ti8k.onrender.com";

const API = axios.create({ baseURL: serverUrl });

export const getAll = (method) => { return API.get(`/api/${method}`); };

export const getOneProd = (id, method) => API.get(`/api/${method}/${id}`);

export const getSimilar = (name) => API.get(`/api/prod/similar?name=${name}`); 
export const getLocation = (name) => API.get(`/api/cars/location?name=${name}`); 
