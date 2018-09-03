<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
            <div class="form-group row">
                <label for="name" class="col-4 col-form-label">Name</label>
                <div class="col-8">
                    <div class="input-group">
                        <input
                        id="name"
                        name="name"
                        type="text"
                        class="form-control here"
                        v-model="user.name">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-4 col-form-label">Email</label>
                <div class="col-8">
                    <div class="input-group">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        class="form-control here"
                        v-model="user.email">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-4 col-form-label">Password</label>
                <div class="col-8">
                    <div class="input-group">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        class="form-control here"
                        v-model="user.password">
                    </div>
                    <span class="alert alert-warning" v-if="error">{{ error }}</span>                    
                </div>
            </div>
            <button name="submit" class="btn btn-primary" type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import { authService } from '../services/Auth';

export default {
    data(){
        return {
            user: {},
            error: ''
        }
    },

    methods: {
        onSubmit(){
            authService.add(this.user)
                .then((response) => {
                    this.$router.push('/login')
                })
                .catch((err) => {
                    console.log(this.error = err.response.data.message)
                })
        }
    }
}
</script>

