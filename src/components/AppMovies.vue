<template>
    <div class="container">
        <MovieRow :movies="movies"/>
    </div>
</template>

<script>
import MovieRow from './MovieRow'
import { movies } from '../services/Movies'

export default {
    name: 'AppMovies',
    components: {
        MovieRow
    },
    data(){
        return {
            movies: []
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
    }
   
    
}
</script>

<style>
.container {
    margin-top: 1rem;
}
</style>


