<template>
  <div class="info-container bg-movies">
    <v-container fluid class="pa-10">
      <v-row>
        <v-col> {{ movieInformation }} </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'movie',
  data() {
    return {
      movieInformation: [],
    }
  },
  async created() {
    try {
      const response = await this.$getMovieDetails(this.$route.params.id)
      this.movieInformation = response
      console.log('info', this.movieInformation)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
<style scoped>
.info-container {
  height: 80vh;
}
</style>
