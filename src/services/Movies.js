import axios from 'axios'

export default class Movies {

    constructor(){
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }

    getAll(){
        return axios.get('movies')
        .then(response => response.data)
          
    }

    add(movie){
        return axios.post('movies', movie)
    }

    get(id){
        return axios.get(`movies/${id}`)
    }

    gett(take){
        return axios.get(`movies?take=${take}`)
    }

}

export const movies = new Movies()