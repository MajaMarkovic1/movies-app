<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link 
                class="navbar-brand" 
                to="/movies">Movies
            </router-link>
           <router-link 
                class="navbar-brand" 
                to="/add">Add
            </router-link>
            <router-link 
                v-if="!isAuthenticated"
                class="navbar-brand" 
                to="/login">Login
            </router-link>
            <a href="#" v-if="isAuthenticated" class="navbar-brand" @click="logout">Logout</a>
            <router-link 
                v-if="!isAuthenticated"
                class="navbar-brand" 
                to="/register">Register
            </router-link>
        </nav>
    </div>
</template>

<script>
import { authService } from '../services/Auth';

export default {
    props: {
        isAuthenticated: Boolean,

    },

    methods: {
        logout(){
            authService.logout()
            this.$emit('userAuthenticated', false)
            this.$router.push('/login')
        }
    }


}
</script>

