<template>
    <div class="container">
        <button @click="select(movie)" class="btn btn-primary">Select</button>
        <div >
            <li class="movie"><h1>{{ movie.title }}</h1></li>
            <li class="list-group-item"><em>Director:</em> {{ movie.director }}</li>
            <li class="list-group-item"><em>Image url:</em> {{ movie.imageUrl }}</li>
            <li class="list-group-item"><em>Release date:</em> {{ movie.releaseDate }}</li>
            <li class="list-group-item"><em>Genre:</em> {{ movie.genre }}</li>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    methods: {
        select(movie){
            this.$emit('select', movie)
        }
    }
}
</script>

<style>
.movie {
    display: flex;
    justify-content: space-between;
}

</style>


