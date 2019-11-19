import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:8888/api/',
    timeout: 10000
});
const userToken = localStorage ? localStorage.getItem('userToken') : null;
if(userToken) {
    api.defaults.headers.common['Authorization'] = userToken;
}
export default api;