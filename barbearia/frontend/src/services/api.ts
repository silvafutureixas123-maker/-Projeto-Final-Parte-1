import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:5049"
})

export default api;