<template>
  <div class="background-image-container">
    <v-container fluid>
      <!-- <Pagination v-model="currentPage" :length="8" />
      <Switchs
        @updatedSwitch="switchTheme = $event"
        inset
        prepend-icon="mdi-brightness-4"
      />
      <div>
        <p class="primary">HOLAHOLA</p>
        <p class="accent">HOLA</p>
        <p class="secondary">HOLA</p>
        <p class="warning">HOLA</p>
        <p class="error">HOLA</p>
      </div> -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      movies: [],
      switchTheme: false,
      currentPage: 1,
      movieToSearch: 'love',
    }
  },

  async created() {
    try {
      await this.fetchMovies()
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    async fetchMovies() {
      try {
        const response = await this.$getMovies(
          this.movieToSearch,
          this.currentPage
        )
        this.movies = response
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  },
  watch: {
    currentPage: {
      immediate: true,
      handler: 'fetchMovies',
    },
    switchTheme(newDarkMode) {
      this.$vuetify.theme.dark = newDarkMode
    },
  },
}
</script>
<style>
.background-image-container {
  height: 100vh;
  background-image: url('/pochoclo.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
