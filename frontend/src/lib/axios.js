import axios from "axios"

// Production vs Development (Made BASE_URL dynamic)
const BASE_URL = import.meta.env.mode === "development" ? "http://localhost:5001/api" : "/api"
const api = axios.create({
    baseURL: "http://localhost:5001/api"
});

export default  api