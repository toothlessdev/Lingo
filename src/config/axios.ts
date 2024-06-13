import axios from "axios";

export const api = axios.create({
    baseURL: "",
});

api.interceptors.request.use((config) => {
    return config;
});

api.interceptors.response.use((response) => {
    console.log(`[RESPONSE] ${response}`);
    return response;
});
