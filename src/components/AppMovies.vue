<template>
    <div class="container">
        <MovieSearch @searchTermUpdated="searchTermUpdated"/>
        <MovieRow :movies="filteredMovies"/>
    </div>
</template>

<script>
import MovieRow from './MovieRow'
import MovieSearch from './MovieSearch'

import { movies } from '../services/Movies'

export default {
    name: 'AppMovies',
    components: {
        MovieSearch,
        MovieRow
    },
    data(){
        return {
            movies: [],
            title: ''
        }
    },

    beforeRouteEnter(to, from, next){
        movies
        .getAll()
        .then(movies => {
            next((vm) => {
                vm.movies = movies
            })
        })
        .catch(err => console.log(err))
    },

    computed: {
        filteredMovies(){
            this.title = this.title.toLowerCase()
            return this.movies.filter(movie => movie.title.toLowerCase().indexOf(this.title) >= 0)
        }
    },

    methods: {
        searchTermUpdated(title){
            //console.log(title)
            this.title = title
        }
    }
    
   
    
}
</script>

<style>
.container {
    margin-top: 1rem;
}
</style>


