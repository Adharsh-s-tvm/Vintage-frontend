import axios from "axios";

const api = axios.create({
    baseUrl: 'https://13.232.195.174/api'
});

export const googleAuth = (code) => api.post(`/google?code=${code}`, code)