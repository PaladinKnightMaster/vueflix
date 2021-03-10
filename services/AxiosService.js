import axios from "axios"

export const movieAPI = axios.create({
    baseURL: '',
    timeout: 10000
})