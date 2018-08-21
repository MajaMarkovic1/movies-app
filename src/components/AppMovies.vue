<template>
    <div class="container">
        
    </div>
</template>

<script>
import { movies } from '../services/Movies'

export default {
    name: 'AppMovies',

    data(){
        return {
            movies: []
        }
    },

    beforeRouteEnter(to, from, next){
        movies
        .getAll()
        .then(response => {
            next((vm) => {
                vm.movies = response.data
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


