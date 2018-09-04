import Vue from 'vue'
import Router from 'vue-router'
import AppMovies from './components/AppMovies'
import AddMovie from './components/AddMovie'
import AppLogin from './components/AppLogin'
import AppRegister from './components/AppRegister'
import SingleMovie from './components/SingleMovie'



Vue.use(Router)

export default new Router ({

    mode: 'history',
    routes: [
        {path: '/', redirect: 'movies'},
        {path: '/movies', component: AppMovies, name: 'movies', requiresAuth: true },
        {path: '/add', component: AddMovie, requiresAuth: true},
        {path: '/login', component: AppLogin, name: 'login'},
        {path: '/register', component: AppRegister, name: 'register'},
        {path: '/movies/:id', component: SingleMovie, name: 'single-movie', requiresAuth: true},
            
    ],

})

