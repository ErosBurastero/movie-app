<template>
  <div class="bg-movies">
    <v-container fluid class="pa-10" v-if="movies && response">
      <MovieCard :movies="movies" :color="blue" />
    </v-container>
    <div
      v-if="response === false"
      :class="[
        'd-flex justify-center pa-10',
        $vuetify.breakpoint.smAndDown && 'flex-wrap',
      ]"
    >
      <VuetifyImage
        src="/images/notFound.jpg"
        max-width="400"
        max-height="500"
      />
      <div
        :class="['pl-4 white--text', $vuetify.breakpoint.smAndDown && 'mt-10']"
      >
        <h2 class="font-weight-regular">
          La {{ type === 'movie' ? 'pelicula' : 'serie' }} "<span
            class="font-weight-bold"
            >{{ movie }}</span
          >" no se ha podido encontrar.
        </h2>
        <h3 class="font-weight-regular">Por favor, intente nuevamente.</h3>
      </div>
    </div>
    <Pagination
      v-if="response"
      :color="white"
      circle
      paginationClass="pb-9"
      v-model="currentPage"
      :length="pagination"
      :total-visible="10"
    />
  </div>
</template>

<script>
import colorVariables from '~/mixins/colorVariables'
import EventBus from '~/services/eventBus'

export default {
  layout: 'movie',
  mixins: [colorVariables],
  data() {
    return {
      movies: [],
      currentPage: 1,
      pagination: null,
      totalResults: null,
      movie: null,
      year: null,
      response: null,
      type: 'movie',
    }
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await this.$getMovies(
          this.movie,
          this.currentPage,
          this.year,
          this.type
        )
        if (response.Response === 'True') {
          this.movies = response.Search
          this.totalResults = parseInt(response.totalResults)
          this.response = true
          if (this.totalResults > 10) {
            this.pagination = Math.ceil(this.totalResults / 10)
          } else {
            this.pagination = 1
          }
        } else {
          this.response = false
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
    EventBus.$on('setFilmType', (type) => {
      this.type = type
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
    type: {
      immediate: true,
      handler: 'fetchMovies',
    },
  },
}
</script>
