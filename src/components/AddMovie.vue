<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
            <div class="form-group row">
                <label for="title" class="col-4 col-form-label">Title</label>
                <div class="col-8">
                    <div class="input-group">
                        <input
                        id="title"
                        name="title"
                        type="text"
                        class="form-control here"
                        v-model="movie.title">
                    </div>
                    <span class="alert alert-warning" v-if="errors.title">{{ errors.title[0] }}</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="director" class="col-4 col-form-label">Director</label>
                <div class="col-8">
                    <div class="input-group">
                        <input
                        id="director"
                        name="director"
                        type="text"
                        class="form-control here"
                        v-model="movie.director">
                    </div>
                    <span class="alert alert-warning" v-if="errors.director">{{ errors.director[0] }}</span>
                    
                </div>
            </div>
            <div class="form-group row">
                <label for="imageUrl" class="col-4 col-form-label">Image URL</label>
                <div class="col-8">
                    <div class="input-group">
                        <input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        class="form-control here"
                        v-model="movie.imageUrl">
                    </div>
                    <span class="alert alert-warning" v-if="errors.imageUrl">{{ errors.imageUrl[0] }}</span>
                    
                </div>
            </div>
            <div class="form-group row">
                <label for="releaseDate" class="col-4 col-form-label">Release date</label>
                <div class="col-8">
                    <div class="input-group">
                        <input
                        id="releaseDate"
                        name="releaseDate"
                        type="text"
                        class="form-control here"
                        v-model="movie.releaseDate">
                    </div>
                    <span class="alert alert-warning" v-if="errors.releaseDate">{{ errors.releaseDate[0] }}</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="genre" class="col-4 col-form-label">Genre</label>
                <div class="col-8">
                    <div class="input-group">
                        <input
                        id="genre"
                        name="genre"
                        type="text"
                        class="form-control here"
                        v-model="movie.genre">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="duration" class="col-4 col-form-label">Duration</label>
                <div class="col-8">
                    <div class="input-group">
                        <input
                        id="duration"
                        name="duration"
                        type="text"
                        class="form-control here"
                        v-model="movie.duration">
                    </div>
                    <span class="alert alert-warning" v-if="errors.duration">{{ errors.duration[0] }}</span>
                    
                </div>
            </div>
            <button name="submit" class="btn btn-primary" type="submit">Add</button>
        </form>
    </div>
</template>

<script>
import { movies } from '../services/Movies'

export default {
    data(){
        return {
            movie: {},
            errors: []
        }
    },

    methods: {
        onSubmit(){
            movies.add(this.movie)
            .then((response) => {
                this.$router.push('/movies')
            })
            .catch(err => console.log(this.errors = err.response.data.errors) )
        }
    }
    
}
</script>

<style>

</style>

