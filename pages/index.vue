<template>
  <div>
    <v-container>
      <Pagination v-model="currentPage" :length="8" />
      {{ currentPage }}
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      movies: [],
      currentPage: 1,
      movieToSearch: null,
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
        const response = await this.$getMovies('dracula', this.currentPage)
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
