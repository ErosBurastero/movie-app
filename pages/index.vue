<template>
  <div>
    <v-container>
      <Pagination v-model="currentPage" :length="8" />
      <Switchs v-model="switchTheme" />
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
  },
}
</script>
