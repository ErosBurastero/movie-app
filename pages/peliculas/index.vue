<template>
  <div>
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col
          v-for="(movie, index) in movies"
          :key="index"
          cols="6"
          lg="2"
          md="4"
          class="align-stretch w-100"
        >
          <Card
            cardClass="h-100"
            nuxt
            :to="{
              name: 'peliculas-id',
              params: { id: movie.imdbID },
            }"
          >
            <template #content>
              <VuetifyImage
                :src="
                  movie.Poster === 'N/A' ? '/noAvailable.jpg' : movie.Poster
                "
                imageClass="image"
                :max-height="$vuetify.breakpoint.mdAndUp ? 300 : 200"
              />
              <div class="pa-2">
                <h3>{{ movie.Title }}</h3>
                <span>{{ 'Año ' + movie.Year }}</span>
              </div>
            </template>
          </Card>
        </v-col>
      </v-row>
    </v-container>

    <Pagination
      v-model="currentPage"
      :length="pagination"
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
      pagination: null,
      totalResults: null,
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
        if (response.Response === 'True') {
          this.movies = response.Search
          this.totalResults = parseInt(response.totalResults)
          if (this.totalResults > 10) {
            this.pagination = Math.ceil(this.totalResults / 10)
          } else {
            this.pagination = 1
          }
        }
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
