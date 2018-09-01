<template>
    <div class="container">
        <div id="buttons">
            <MovieSearch @searchTermUpdated="searchTermUpdated" /><br>
            <div id="buttons">
                <button @click="selectAll()" class="btn btn-warning">Select all</button>
                <button @click="deselectAll()" class="btn btn-danger">Deselect all</button>
                <div class="dropdown">
                    <button class="btn btn-success">Sort</button>
                    <div class="dropdown-content">
                        <a class="dropdown-item" @click="sortMovies('title', 'asc')">Sort by Name asc</a>
                        <a class="dropdown-item" @click="sortMovies('title', 'desc')">Sort by Name desc</a>
                        <a class="dropdown-item" @click="sortMovies('releaseDate', 'asc')">Sort by Duration asc</a>
                        <a class="dropdown-item" @click="sortMovies('releaseDate', 'desc')">Sort by Duration desc</a>
                    </div>
                </div>
            </div>  
        </div>

        <div>Selected: {{ selectedCounter }}</div>
        
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

        sortMovies(prop, order){
            let orderCoefficient = order === 'asc' ? 1 : -1
            this.movies = this.movies.sort(function(a,b){
                return a[prop] >= b[prop] ? orderCoefficient : -orderCoefficient
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

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown:hover .dropdown-content {display: block;}


</style>


