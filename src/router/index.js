import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from './../views/Movies.vue'
import Home from './../views/Home.vue'


Vue.use(VueRouter)
console.log(Movies) // eslint-disable-line
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
    
  },
  {
    path: '/about',
    name: 'about',
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
