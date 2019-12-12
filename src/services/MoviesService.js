import {HttpService} from './HttpService'

class MoviesServices extends HttpService {
    getAll() {
        return this.axios.get('/movies')
    }
}

export const moviesService = new MoviesServices()