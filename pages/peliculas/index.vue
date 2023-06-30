<template>
  <div>
    {{ movie }}
    <Pagination v-model="currentPage" :length="8" />
  </div>
</template>

<script>
import EventBus from '~/services/eventBus'

export default {
  layout: 'movie',
  data() {
    return {
      movies: [],
      currentPage: 1,
      movieToSearch: 'love',
      movie: null,
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
  mounted() {
    EventBus.$on('setFilmName', (movie) => {
      console.log('movie', movie)
      this.movie = movie
    })
  },
  watch: {
    currentPage: {
      immediate: true,
      handler: 'fetchMovies',
    },
  },
}
</script>