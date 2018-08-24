<template>
    <div class="container">
        <div :class="{ gray: selected }">
            <li class="movieTitle">
                <h2>{{ movie.title }}</h2>
                <button @click="select(movie)" class="btn btn-primary">Select</button>
            </li>
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
.movieTitle {
    display: flex;
    justify-content: space-between;
}

.gray {
    background-color: gainsboro;
}

</style>


