<template>
    <div  class="container">
        <ul class="list-group" v-for="movie in movies" :key="movie.id">
            <li class="list-group-item"><h1>{{ movie.title }}</h1></li>
            <li class="list-group-item"><em>Director:</em> {{ movie.director }}</li>
            <li class="list-group-item"><em>Image url:</em> {{ movie.imageUrl }}</li>
            <li class="list-group-item"><em>Release date:</em> {{ movie.releaseDate }}</li>
            <li class="list-group-item"><em>Genre:</em> {{ movie.genre }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        movies: Array
    }
}
</script>

<style>

</style>


