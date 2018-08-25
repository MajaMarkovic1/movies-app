<template>
    <div class="container">
        
        <MovieSearch @searchTermUpdated="searchTermUpdated"/><br>
        <div>The number of selected movies is {{ selectedCounter }}</div>
        <button @click="selectAll()" class="btn btn-primary">Select all</button>
        <button @click="deselectAll()" class="btn btn-primary">Deselect all</button>
        <button @click="sortByNameAsc()" class="btn btn-primary">Sort by Name asc</button>
        <button @click="sortByNameDesc()" class="btn btn-primary">Sort by Name desc</button>
        <button @click="sortByDurationAsc()" class="btn btn-primary">Sort by Duration asc</button>
        <button @click="sortByDurationDesc()" class="btn btn-primary">Sort by Duration desc</button>
        
        <MovieRow 
            v-for="movie in visibleMovies" :key="movie.id"
            :movie="movie"
            @select="select"
            :selectedMovies="selectedMovies"
            /><br>

        <div class="alert alert-warning" v-if="filteredMovies.length === 0">{{error}}</div>

        <MoviePagination 
            :pageNumber="pageNumber" 
            :pageCount="pageCount" 
            @changePage="changePage"/>
    </div>
</template>

<script>

import MovieRow from './MovieRow'
import MovieSearch from './MovieSearch'
import MoviePagination from './MoviePagination'

import { movies } from '../services/Movies'

export default {
    name: 'AppMovies',
    components: {
        MovieSearch,
        MovieRow,
        MoviePagination
    },
    data(){
        return {
            movies: [],
            title: '',
            error : 'The content you are looking for is not existing!',
            selectedMovies: [],
            pageNumber: 1,
            
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
        selectedCounter(){
            return this.selectedMovies.length
        },

        pageCount(){
            return Math.ceil(this.movies.length / 5);
            
        },

        visibleMovies(){
            let bottomLimit = (this.pageNumber - 1) * 5
            let topLimit = bottomLimit + 5
            return this.filteredMovies.filter((movie, index) => index >= bottomLimit && index < topLimit)
        },

    },

    methods: {
        searchTermUpdated(title){
            //console.log(title)
            this.title = title
           
        },
        select(movie){
            if (this.selectedMovies.includes(movie.id)){
                return;
            }                        
            this.selectedMovies.push(movie.id)  
            console.log(this.selectedMovies)
        },

        selectAll(){           
            this.selectedMovies = this.movies.map(movie => movie.id)
            console.log(this.selectedMovies)
            
        },

        deselectAll(){ 
            this.selectedMovies = []              
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
        changePage(page){
            this.pageNumber = page
        }
        
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


