import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverUrl });

export const register = (formData) => API.post(`/api/register`, formData);
export const login = (formData) => API.post(`/api/login`, formData);
export const googleAuth = (formData) => API.post(`/api/googleAuth`, formData);
