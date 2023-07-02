<template>
  <div class="bg-movies">
    <v-container fluid class="pa-10" v-if="movies && response">
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
            :color="blue"
            nuxt
            :to="{
              name: 'peliculas-id',
              params: { id: movie.imdbID },
            }"
          >
            <template #content>
              <VuetifyImage
                :src="
                  movie.Poster === 'N/A'
                    ? '/images/noAvailable.jpg'
                    : movie.Poster
                "
                imageClass="image"
                :max-height="$vuetify.breakpoint.mdAndUp ? 330 : 200"
              />
              <div class="pa-4">
                <h3 class="white--text">{{ movie.Title }}</h3>
                <span class="white--text">{{ 'Año ' + movie.Year }}</span>
              </div>
            </template>
          </Card>
        </v-col>
      </v-row>
    </v-container>
    <div v-else class="elseContainer d-flex justify-center pa-10">
      <VuetifyImage
        src="/images/notFound.jpg"
        max-width="400"
        max-height="500"
      />
      <div class="pl-4 white--text">
        <h2 class="font-weight-regular">
          No se ha podido encontrar la pelicula con el nombre "<span
            class="font-weight-bold"
            >{{ movie }}</span
          >"
        </h2>
        <h3 class="font-weight-regular">Por favor, intente nuevamente</h3>
      </div>
    </div>
    <Pagination
      v-if="response"
      :color="white"
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
<style scoped>
.elseContainer {
  height: 100vh;
}
</style>
