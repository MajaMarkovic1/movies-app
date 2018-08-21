<template>
    <div  class="container">
        
        <li class="list-group-item"><h1>{{ movie.title }}</h1></li>
        <li class="list-group-item"><em>Director:</em> {{ movie.director }}</li>
        <li class="list-group-item"><em>Image url:</em> {{ movie.imageUrl }}</li>
        <li class="list-group-item"><em>Release date:</em> {{ movie.releaseDate }}</li>
        <li class="list-group-item"><em>Genre:</em> {{ movie.genre }}</li>
        
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>


