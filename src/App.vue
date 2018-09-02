<template>
  <div>
    <Navbar :isAuthenticated="isAuthenticated" @userAuthenticated="toggleAuthenticated"/>
    <router-view @userAuthenticated="toggleAuthenticated"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import { authService } from './services/Auth';


export default {
  name: 'app',

  data(){
    return {
      isAuthenticated: authService.isAuthenticated()
    }
  },

  components: {
    HelloWorld,
    Navbar
  },

  methods: {
    toggleAuthenticated(value){
      this.isAuthenticated = value
      console.log(this.isAuthenticated)
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
