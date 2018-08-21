<template>
    <div>
        <nav class="navbar navbar-light bg-light">
        <form class="form-inline" @submit.prevent="searchTermUpdated">
            <input name="title" v-model="movie" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            movie: '',
            
            
        }
    },

    methods: {
        searchTermUpdated(movie){
            this.$emit('searchTermUpdated', this.movie)
        }
    }
    
}
</script>

<style>

</style>


