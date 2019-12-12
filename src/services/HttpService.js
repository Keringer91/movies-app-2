import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

export class HttpService {
    constructor() {
        this.configureAxios(
            BASE_URL,
            {
                accept: 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        )
        this.axios = axios
    }

    configureAxios(baseURL, headers = {}) {
        axios.defaults.baseURL = baseURL
        Object.assign(
            axios.defaults.headers.common,
            headers
        )
    }
}