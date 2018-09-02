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
                class="navbar-brand" 
                to="/login">Login
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        isAuthenticated: Boolean,

    },


}
</script>

