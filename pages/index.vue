<template>
  <div>
    <v-container>
      <Pagination v-model="currentPage" :length="8" />
      <Switchs
        @updatedSwitch="switchTheme = $event"
        :label="`Switch 1: ${switchTheme.toString()}`"
      />
      <div>
        <p class="primary">HOLAHOLA</p>
        <p class="accent">HOLA</p>
        <p class="secondary">HOLA</p>
        <p class="warning">HOLA</p>
        <p class="error">HOLA</p>
      </div>
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
    console.log('vuetify', this.$vuetify.theme)
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
