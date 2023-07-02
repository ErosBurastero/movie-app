<template>
  <div class="bg-movies">
    <v-container fluid class="pa-0" v-if="movieInformation">
      <v-row>
        <v-col
          cols="12"
          lg="8"
          :class="['pa-10', $vuetify.breakpoint.lgAndUp ? 'd-flex' : '']"
        >
          <VuetifyImage
            :src="
              movieInformation.Poster === 'N/A'
                ? '/images/noAvailable.jpg'
                : movieInformation.Poster
            "
            imageClass="image"
            :max-width="$vuetify.breakpoint.lgAndUp ? 450 : ''"
            :max-height="$vuetify.breakpoint.lgAndUp ? 700 : 500"
          />
          <div
            :class="[
              'white--text',
              $vuetify.breakpoint.mdAndDown ? 'my-5' : 'pl-7',
            ]"
          >
            <h2>
              {{
                movieInformation.Title + ' ( ' + movieInformation.Year + ' )'
              }}
            </h2>
            <div
              :class="[
                'mb-4',
                $vuetify.breakpoint.xsOnly ? '' : 'd-flex align-center',
              ]"
            >
              <h3>Rating:</h3>
              <Rating
                ratingClass="pl-3"
                size="25"
                dense
                readonly
                half-increments
                :length="10"
                :value="parseFloat(movieInformation.imdbRating)"
                :background-color="white"
                :color="blue"
              />
              <h3 class="pl-2 mt-1">
                {{
                  +movieInformation.Ratings.length === 0
                    ? movieInformation.imdbRating
                    : ' ( ' + movieInformation.Ratings[0].Value + ' )'
                }}
              </h3>
            </div>
            <h4 class="font-weight-bold mt-4">Sinopsis:</h4>
            <span>{{ movieInformation.Plot }}</span>
            <h3 class="mt-4">Actores: {{ movieInformation.Actors }}</h3>
            <h3>Director: {{ movieInformation.Director }}</h3>
            <h3>Escritor/es: {{ movieInformation.Writer }}</h3>
            <h3>Fecha de estreno: {{ movieInformation.Released }}</h3>
            <h3>Duracion: {{ movieInformation.Runtime }}</h3>
            <h3>Genero: {{ movieInformation.Genre }}</h3>
            <h3>Tipo: {{ movieInformation.Type }}</h3>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import colorVariables from '~/mixins/colorVariables'
export default {
  layout: 'movie',
  mixins: [colorVariables],
  data() {
    return {
      movieInformation: null,
      movieId: null,
    }
  },
  async created() {
    try {
      this.movieId = this.$route.params.id
      const response = await this.$getMovieDetails(this.movieId)
      this.movieInformation = response
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
