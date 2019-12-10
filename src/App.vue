<template>
  <div id="app" class="d-flex flex-column h-100">
    <Header/>
      <main role="main" class="flex-shrink-0">
       <router-view></router-view>
      </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue' 
export default {
  name: 'app',
  components: {
    Header, 
    Footer
  }
}
</script>

<style>

</style>
