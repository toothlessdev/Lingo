import axios from "axios";

export const api = axios.create({
    baseURL: `http://${process.env.NEXT_PUBLIC_API_BASE_URL}/lingo-be/api`,
});

api.interceptors.request.use((config) => {
    return config;
});

api.interceptors.response.use((response) => {
    console.log(`[RESPONSE] ${response}`);
    return response;
});
