<template>
    <div class="container">
        <MovieSearch @searchTermUpdated="searchTermUpdated"/>
        <!-- <div>The number of selected movies is {{ count }}</div> -->
        <button @click="selectAll()" class="btn btn-primary">Select all</button>
        <button @click="deselectAll()" class="btn btn-primary">Deselect all</button>
        <button @click="sortByNameAsc()" class="btn btn-primary">Sort by Name asc</button>
        <button @click="sortByNameDesc()" class="btn btn-primary">Sort by Name desc</button>
        <button @click="sortByDurationAsc()" class="btn btn-primary">Sort by Duration asc</button>
        <button @click="sortByDurationDesc()" class="btn btn-primary">Sort by Duration desc</button>
        
        <MovieRow 
            v-for="movie in filteredMovies" :key="movie.id" 
            :movie="movie"
            @select="select"
            :selectedAll="selectedAll"
            />
        <div class="alert alert-warning" v-if="filteredMovies.length === 0">{{error}}</div>
        
        
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
            title: '',
            error : 'The content you are looking for is not existing!',
            count: 0,
            selectedMovies: [],
            selectedAll: false,
         
            
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
            
        },

    },

    methods: {
        searchTermUpdated(title){
            //console.log(title)
            this.title = title
           
        },
        select(movie){
            if (this.selectedMovies.includes(movie)){
                return;
            }
            this.count++    
            this.selectedMovies.splice(this.movies)                        
            this.selectedMovies.push(movie)
            console.log(this.selectedMovies)  
            
        },

        selectAll(){
            this.selectedMovies.splice(this.movies)            
            this.selectedMovies.push(this.movies)
            this.selectedAll = true
            console.log(this.selectedMovies)  
            
        },

        deselectAll(){ 
            this.selectedMovies.splice(movies)              
            this.selectedAll = false
            console.log(this.selectedMovies)  
            
        },

        sortByNameAsc(){
            this.movies.sort(function(a, b){
                return a.title > b.title
                
            })
        },

        sortByNameDesc(){
            this.movies.sort(function(a, b){
                return a.title < b.title
                
            })
        },

        sortByDurationAsc(){
            this.movies.sort(function(a, b){
                return a.releaseDate > b.releaseDate
            })
        },

        sortByDurationDesc(){
            this.movies.sort(function(a, b){
                return b.releaseDate > a.releaseDate
            })
        },

        
    }
   
    
}
</script>

<style>
.container {
    margin-top: 1rem;
}

button {
    margin-right: 0.5rem;
}
</style>


