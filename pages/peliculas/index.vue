<template>
  <div>
    hola
    <Pagination v-model="currentPage" :length="8" />
  </div>
</template>

<script>
export default {
  layout: 'movie',
  data() {
    return {
      movies: [],
      currentPage: 1,
      movieToSearch: 'love',
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
  async created() {
    try {
      await this.fetchMovies()
    } catch (error) {
      console.log(error)
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler: 'fetchMovies',
    },
  },
}
</script>

<style></style>
