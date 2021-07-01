import axios from 'axios';

const api = axios.create({
    baseURL: 'https://swop.cx/rest/'
});

export default api;