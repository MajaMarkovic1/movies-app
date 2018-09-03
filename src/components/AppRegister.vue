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
                    <span class="alert alert-warning" v-if="errors.name">{{ errors.name[0] }}</span>                     
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
                    <span class="alert alert-warning" v-if="errors.email">{{ errors.email[0] }}</span> 
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
                <span class="alert alert-warning" v-if="errors.password">{{ errors.password[0] }}</span>
                                     
                </div>
            </div>
             <div class="form-group row">
                <label for="password" class="col-4 col-form-label">Confirm password</label>
                <div class="col-8">
                    <div class="input-group">
                        <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        class="form-control here"
                        v-model="confirmPassword">
                    </div>                     
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
            errors: [],
            confirmPassword: ''
        }
    },

    methods: {
        onSubmit(){

            if (this.confirmPassword !== this.user.password){
                return;
            }
            
            authService.register(this.user)
                .then((response) => {
                    
                     this.$router.push('/login')
                })
                .catch((err) => {
                    console.log(this.errors = err.response.data.errors)
                })
        }
    }
}
</script>

