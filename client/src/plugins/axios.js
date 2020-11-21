import axios from 'axios'

const apiURL = 'http://localhost:1080/api/v1'
const headers = {}
const localStorageToken = localStorage.getItem('token')
const Parser = JSON.parse(localStorageToken)

if (Parser) {
    headers.Authorization = `Bearer ${Parser}`
}

const axiosInstance = axios.create({
    baseURL: apiURL,
    headers,
})

export default axiosInstance
