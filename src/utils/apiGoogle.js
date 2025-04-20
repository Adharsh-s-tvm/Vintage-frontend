import axios from "axios";

const api = axios.create({
    baseUrl: 'https://www.vintagefashion.site/api'
});

export const googleAuth = (code) => api.post(`/google?code=${code}`, code)