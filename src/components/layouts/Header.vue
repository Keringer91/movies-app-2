<template>
  <div>
    <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Fixed navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
        <MoviesSearch/>
        <li class="nav-item" v-if="isUserAuthenticated">
          <button class="btn btn-outline-danger my-2 my-sm-0" @click="onLogout">Logout</button>
        </li>
        </div>
    </nav>
    </header>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import MoviesSearch from './../MoviesSearch'

export default {
  components: {
    MoviesSearch
  },
  computed: {
    ...mapGetters({
      isUserAuthenticated: 'isUserAuthenticated'
    })
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    onLogout() {
      this.logout()
      this.$router.push({
        name: 'login'
      })
    }

  }
}
</script>

<style>

</style>
