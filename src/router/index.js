import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from './../views/Movies.vue'
import Home from './../views/Home.vue'
import Login from './../views/Login.vue'
import store from './../store'

Vue.use(VueRouter)
console.log(Movies) // eslint-disable-line
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
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

router.beforeEach((to, from, next) => {
  const isUserLoggedIn = store.getters.isUserAuthenticated;
  if(!to.meta.guest && !isUserLoggedIn) {
    return next({
      name: 'login'
    })
  }
  return next()
})

export default router
