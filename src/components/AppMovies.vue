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
            v-for="movie in filteredMovies" :key="movie.id" 
            :movie="movie"
            @select="select"
            :selectedMovies="selectedMovies"
            /><br>
        <div class="alert alert-warning" v-if="filteredMovies.length === 0">{{error}}</div>
       
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <button class="page-link"  @click="prevPage" :disabled="pageNumber <= 0">Previous</button>
                </li>
                <li class="page-item"><button class="page-link">{{ pageNumber }}</button></li>
                <li class="page-item">
                    <button class="page-link"  @click="nextPage" :disabled="pageNumber >= pageCount">Next</button>
                </li>
            </ul>
        </nav>
        
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
            selectedMovies: [],
            pageNumber: 0,
            size: 5
            
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
            let filteredMovies = this.movies.filter(movie => movie.title.toLowerCase().indexOf(this.title) >= 0)

            const start = this.pageNumber * this.size
            const end = start + this.size;
            let f = filteredMovies.slice(start, end);
            return f
            
        },
        selectedCounter(){
            return this.selectedMovies.length
        },

        pageCount(){
            let l = this.movies.length
            let  s = this.size;
            return Math.floor(l/s);
            
        }


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

        nextPage(){
             this.pageNumber++ 
        },

        prevPage(){
            this.pageNumber--;
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


