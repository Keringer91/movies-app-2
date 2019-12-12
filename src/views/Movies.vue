<template>
    <div class="container">
        <h1 class="mt-5">Movies</h1>
        <ul>
            <li v-for="movie in movies" :key="movie.id">
                {{ movie.title }}
                {{ movie.realeaseDate }}
            </li>
        </ul>
    </div>
</template>
<script>
import store from './../store'
export default {
    computed:{
         movies() {
             return store.getters.filteredMovies
         }
    },
    beforeRouteEnter(to, from, next) {
        store.dispatch('fetchMovies').then(() => {
            next()
        })
    }
}
</script>>