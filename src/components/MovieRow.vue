<template>
    <div class="container">
        <div class="movies" :class="{ gray: selected }">
            <h5 >{{ movie.title }}</h5>        
            <div>
                <button @click="select(movie)" class="btn btn-primary">Select</button>  
                <router-link 
                    class="btn btn-success"
                    :to="{ name: 'single-movie', params: {id: movie.id}}">View movie
                </router-link> 
            </div>          
        </div>
    </div>
</template>

<script>

export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
        selectedMovies: {
            type: Array
        }
    },
    computed: {
        selected(){
            return this.selectedMovies.indexOf(this.movie.id) >= 0
        }
    },
    methods: {
        select(){
            this.$emit('select', this.movie)
        }
    }
}
</script>

<style>

.gray {
    background-color: gainsboro;
}

img {
    width: 640px;
    height: 480px;
}

.movies {
    display: flex;
    justify-content: space-between;
}

h5 {
    color: gray;
}
</style>


