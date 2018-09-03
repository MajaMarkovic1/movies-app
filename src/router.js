import Vue from 'vue'
import Router from 'vue-router'
import AppMovies from './components/AppMovies'
import AddMovie from './components/AddMovie'
import AppLogin from './components/AppLogin'
import AppRegister from './components/AppRegister'


Vue.use(Router)

export default new Router ({

    mode: 'history',
    routes: [
        {path: '/', redirect: 'movies'},
        {path: '/movies', component: AppMovies, name: 'movies' },
        {path: '/add', component: AddMovie},
        {path: '/login', component: AppLogin, name: 'login'},
        {path: '/register', component: AppRegister, name: 'register'},
            
    ],

})

