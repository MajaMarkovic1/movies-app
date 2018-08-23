<template>
    <div class="container">
        <div :class="{ gray: selected || selectedAll }">
            <li class="movieTitle">
                <h2>{{ movie.title }}</h2>
                <button @click.once="select(movie)" class="btn btn-primary">Select</button>
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
    data(){
        return {
            selected: false
        }
    },
    props: {
        movie: {
            type: Object,
            required: true,
        },
        selectedAll: {
            type: Boolean
        }
    },
    methods: {
        select(movie){
            this.selected ? this.selected = false : this.selected = true  
            this.$emit('select', movie)
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


