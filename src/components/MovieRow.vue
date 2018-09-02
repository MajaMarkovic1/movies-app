<template>
    <div class="container">
        <div>
            <button @click="select(movie)" class="btn btn-primary">Select</button>            
            <h2  :class="{ gray: selected }">{{ movie.title }}</h2>
            <div><em>Director:</em> {{ movie.director }}</div>
            <div><img :src="movie.imageUrl" alt="Image"></div>
            <div><em>Release date:</em> {{ movie.releaseDate }}</div>
            <div><em>Genre:</em> {{ movie.genre }}</div>
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

.container {
    width: 80%;
}

img {
    width: 640px;
    height: 480px;
}

</style>


