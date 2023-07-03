<template>
  <v-row class="d-flex justify-center">
    <v-col
      v-for="(movie, index) in movies"
      :key="index"
      cols="12"
      sm="6"
      lg="3"
      md="4"
      xl="2"
      :class="['align-stretch w-100', $vuetify.breakpoint.xlOnly && 'mx-2']"
    >
      <Card
        v-bind="$attrs"
        cardClass="h-100 pb-4"
        nuxt
        :to="{
          name: 'peliculas-id',
          params: { id: movie.imdbID },
        }"
      >
        <template #content>
          <VuetifyImage
            :src="
              movie.Poster === 'N/A' ? '/images/noAvailable.jpg' : movie.Poster
            "
            imageClass="image"
            :max-height="$vuetify.breakpoint.mdAndUp ? 330 : 200"
          />
          <v-card-title
            :class="[
              'white--text',
              $vuetify.breakpoint.smAndDown && 'subtitle-1',
            ]"
            >{{ movie.Title }}</v-card-title
          >
          <v-card-subtitle class="white--text">{{
            'Año ' + movie.Year
          }}</v-card-subtitle>
        </template>
      </Card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
}
</script>
