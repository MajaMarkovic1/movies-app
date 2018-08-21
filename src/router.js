import Vue from 'vue'
import Router from 'vue-router'
import AppMovies from './components/AppMovies'

Vue.use(Router)

export default new Router ({

    mode: 'history',
    routes: [
        {path: '/', redirect: 'movies'},
        {path: '/movies', component: AppMovies },
        
    ]

})

