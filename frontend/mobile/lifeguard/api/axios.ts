import axios from "axios"
import { tokenStorage } from "../storages/tokenStorage"

const api = axios.create({
    baseURL: "http://192.168.1.10:8000/api",
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(
    async (config) => {
        const token = await tokenStorage.getAccessToken()

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    }
)

export default api