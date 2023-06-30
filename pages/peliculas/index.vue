<template>
  <div>
    {{ movies }}
    <Pagination
      v-model="currentPage"
      :length="movies.totalResults / 10"
      :total-visible="10"
    />
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
      movie: null,
      year: null,
    }
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await this.$getMovies(
          this.movie,
          this.currentPage,
          this.year
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
      this.movie = movie
    })
    EventBus.$on('setFilmYear', (year) => {
      this.year = year
    })
  },
  watch: {
    currentPage: {
      immediate: true,
      handler: 'fetchMovies',
    },
    movie: {
      immediate: true,
      handler: 'fetchMovies',
    },
    year: {
      immediate: true,
      handler: 'fetchMovies',
    },
  },
}
</script>
