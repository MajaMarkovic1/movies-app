<template>
    <div class="container">
        <h1>{{ movie.title }}</h1>
        <div><em>Director:</em> {{ movie.director }}</div>
        <div><em>Release date:</em> {{ movie.releaseDate }}</div>
        <div><em>Genre:</em> {{ movie.genre }}</div>
        <div><img :src="movie.imageUrl" alt="Image"></div>
        
    </div>
</template>

<script>
import { movies } from '../services/Movies'
export default {
    data() {
        return {
            movie: {}
        }
    },
    beforeRouteEnter(to, from, next) {
        movies.get(to.params.id)
        .then((response) => {
            next(vm => {
                vm.movie = response.data
            })
        })
    }
}
</script>

<style>
div {
    margin-top: 1rem;
}

</style>

