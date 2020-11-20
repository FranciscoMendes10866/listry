import axios from 'axios'

const apiURL = 'http://localhost:1080/api/v1'
const headers = {}
const localStorageToken = localStorage.getItem('token')

if (localStorageToken) {
    headers.Authorization = `Bearer ${localStorageToken}`
}

const axiosInstance = axios.create({
    baseURL: apiURL,
    headers,
})

export default axiosInstance
