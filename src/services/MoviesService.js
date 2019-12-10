import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

class MoviesServices {
    constructor() {
        this.configureAxios(
            BASE_URL,
            {
                accept: 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        )
    }

    configureAxios(baseURL, headers = {}) {
        axios.defaults.baseURL = baseURL
        Object.assign(
            axios.defaults.headers.common,
            headers
        )
    }

    getAll() {
        return axios.get('/movies')
    }
}

export const moviesService = new MoviesServices()