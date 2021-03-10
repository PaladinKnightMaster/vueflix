<template>
  <div class="container-fluid">
      <header class="row bg-dark text-light">
        <img alt="Vue logo" src="./assets/logo.png">ueflix
      </header>
      <main class="row bg-primary">
        <form @submit.prevent="search">
          <label for="text">Search</label>
          <input type="text" placeholder="Movie Title" v-model="state.query" class="p-1 ml-1">
          <button type="submit" class="btn btn-success mx-1">Submit</button>
        </form>
      </main>
      <footer class="row bg-dark text-light">
        <div>Made with Love By Ethan</div>
      </footer>
  </div>
</template>

<script>
import { reactive } from 'vue'

// Instructor Used Private Movie API
// Will Return to this Project if a good Movie API is found

export default {
  name: 'App',
  setup () {
    const state = reactive({
      query: ''
    })
    return {
      state,
      search () {
        console.log(state.query)
        state.query = ''
      }
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  min-height: 91vh;
  flex-grow: 1;
}

img {
  height: 40px;
}
</style>
